import s from './profile.module.css'
import defaultAvatar from '../../assets/defaultAvatar.jpg'

// - Hooks

import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useStartChattingMutation} from "../../api/dialogs-api.ts";
import React, {useEffect, useMemo, useState} from "react";

// - Actions

import {authLogout} from "../../features/auth";
import {getProfile, toggleIsFollowed} from "../../features/profile";

// - Components and hoc

import {withLoginRedirect} from "../../hoc/login-redirect.tsx";
import {ProfileInfo} from "../../components/profileInfo";
import {compose} from "@reduxjs/toolkit";
import {Navigate} from "react-router-dom";
import {setDialogName} from "../../features/dialogs";

// ------------------------------------


const Profile = React.memo(() => {
    const dispatch = useAppDispatch()

    const profile = useAppSelector(getProfile)

    const {userId, isFollowed, ...props} = profile

    const [startChatting, {data, isSuccess}] = useStartChattingMutation()
    const [isChattingAccepted, setIsChattingAccepted] = useState(false)
    const [isFollowingProgress, setIsFollowingProgress] = useState(false);

    const handleToggleFollow = useMemo(
        () => (follow: boolean) => {
            dispatch(toggleIsFollowed({ userId, follow })).then(({ payload }) => {
                // @ts-ignore
                if (payload.resultCode === 0) setIsFollowingProgress(false);
            });
        },
        [dispatch, userId]
    );

    const handleFollowClick = () => handleToggleFollow(true)
    const handleUnfollowClick = () => handleToggleFollow(false)

    const handleLogout = useMemo(() => () => dispatch(authLogout()), [dispatch])

    const handleSendBtnClick = useMemo(() => () => {
        startChatting(userId)
        dispatch(setDialogName(props.fullName))
    }, [dispatch, props.fullName, startChatting, userId]);

    useEffect(() => {
        if (isSuccess && data && data.resultCode === 0) setIsChattingAccepted(true)
    }, [data, isSuccess]);

    if (isChattingAccepted) return <Navigate to={'/dialogs/' + userId}/>

    return (
        <div className={s.profile}>
            <div className={s.navigation}>
                <button className={s.button}>
                    <img alt='avatar' src={props.photos.small || defaultAvatar}/>
                    <div className={s.logout} onClick={handleLogout}>LOGOUT</div>
                </button>
            </div>
            <div>
                <ProfileInfo {...props} />
            </div>
            <div>
                <button onClick={handleSendBtnClick} className='materialBtn'>
                    Send Message
                </button>
            </div>
            <div>
                {
                    isFollowed
                        ? <button className='materialBtn materialBtnPrvt'
                                  onClick={handleUnfollowClick}
                                  disabled={isFollowingProgress}
                        >Unfollow</button>
                        : <button className='materialBtn materialBtn'
                                  onClick={handleFollowClick}
                                  disabled={isFollowingProgress}
                        >follow</button>
                }
            </div>
        </div>
    )
})

export const ProfileWithRedirect = compose(withLoginRedirect)(Profile)