import s from './profile.module.css'
import defaultAvatar from '@/assets/defaultAvatar.jpg'

// - Hooks

import { useAppDispatch, useAppSelector, useUserIdFromParams } from "@/app/hooks.ts";
import React, { useEffect } from "react";

// - Actions

import { authLogout } from "@/slices/auth";
import { getProfile, getUserData } from "@/slices/profile";

// - Components and hoc

import { ProfileInfo } from "@/features/profileInfo";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";
import { UserProfileBtns } from "@/features/userProfileBtns";

// ------------------------------------


export const Profile = React.memo(() => {
    const dispatch = useAppDispatch()

    const {
        userId, isFollowed,
        isLoading, ...props
    } = useAppSelector(getProfile)

    const { id: myId} = useAppSelector(state => state.auth.userInfo)

    // if no user id in url then returns owner id
    const { id, isOwner} = useUserIdFromParams(myId)

    // dispatch thunk that fills the profile state
    useEffect(() => {
        dispatch(getUserData(id))
    }, [dispatch, id]);


    // sign out from account
    const handleLogout = () => dispatch(authLogout())

    return (
        <WithLoading isLoading={isLoading}>
            <div className={s.profile}>
                {isOwner && <div className={s.navigation}>
                    <button className={s.button}>
                        <img alt='avatar' src={props.photos.small || defaultAvatar}/>
                        <div className={s.logout} onClick={handleLogout}>LOGOUT</div>
                    </button>
                </div>}
                <div>
                    <ProfileInfo {...props} isOwner={isOwner}/>
                </div>
                <div>
                    {!isOwner && <UserProfileBtns userId={userId} fullName={props.fullName} isFollowed={isFollowed} />}
                </div>
            </div>
        </WithLoading>
    )
})
