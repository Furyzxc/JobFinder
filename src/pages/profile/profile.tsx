import s from './profile.module.css'
import defaultAvatar from '../../assets/defaultAvatar.jpg'

// - Hooks

import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useStartChattingMutation} from "../../api/dialogs-api.ts";
import React, {useEffect, useState} from "react";

// - Actions

import {authLogout} from "../../features/auth";
import {getProfile } from "../../features/profile";
import {setDialogName} from "../../features/dialogs";

// - Components and hoc

import {ProfileInfo} from "../../components/profileInfo";
import {Navigate} from "react-router-dom";
import {Button} from "@mui/material";
import {Follow} from "../../components/follow";

// ------------------------------------

interface ProfileProps {
    isOwner: boolean
}

export const Profile = React.memo(({isOwner}: ProfileProps) => {
    const dispatch = useAppDispatch()

    const profile = useAppSelector(getProfile)

    const { userId, isFollowed, ...props} = profile

    const [startChatting, {data, isSuccess}] = useStartChattingMutation()
    const [isChattingAccepted, setIsChattingAccepted] = useState(false)

    const handleLogout = () => dispatch(authLogout())

    const handleSendBtnClick = () => {
        startChatting(userId)
        dispatch(setDialogName(props.fullName))
    }

    useEffect(() => {
        if (isSuccess && data && data.resultCode === 0) setIsChattingAccepted(true)
    }, [data, isSuccess]);

    if (isChattingAccepted) return <Navigate to={'/dialogs/' + userId}/>

    return (
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
            {
                !isOwner && (
                    <div className={s.btns}>
                        <span className={s.send}>
                            <Button variant='outlined' onClick={handleSendBtnClick}>
                                Send Message
                            </Button>
                        </span>
                        <span>
                            <Follow isFollowed={isFollowed} userId={userId}/>
                        </span>
                    </div>)
            }
        </div>
    )
})
