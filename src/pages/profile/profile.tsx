import s from './profile.module.css'
import defaultAvatar from '../../assets/defaultAvatar.jpg'

// - Hooks

import { useAppDispatch } from "../../services/hooks.ts";

// - Actions

import { authLogout } from "../../features/auth";

// - Components

import { withLoginRedirect } from "../../hoc/login-redirect.tsx";
import { UserInfo } from "../../components/userInfo";
import { compose } from "@reduxjs/toolkit";
import { toggleIsFollowed } from "../../features/profile";

// ------------------------------------

export interface ProfileProps {
    isFollowed: boolean

    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string

    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

    photos: {
        small: string | null
        large: string | null
    }

    status: string | null
}

const Profile = ({userId, isFollowed, ...props}: ProfileProps) => {
    const dispatch = useAppDispatch()

    const handleFollowClick = () => dispatch(toggleIsFollowed({userId, follow: true}))
    const handleUnfollowClick = () => dispatch(toggleIsFollowed({userId, follow: false}))

    const handleLogout = () => dispatch(authLogout())

    return (
        <div className={s.profile}>
            <div className={s.navigation}>
                <button className={s.button}>
                    <img alt='avatar' src={props.photos.small || defaultAvatar}/>
                    <div className={s.logout} onClick={handleLogout}>LOGOUT</div>
                </button>
            </div>

            <div>
                <UserInfo {...props} />
            </div>
            <div>
                {
                    isFollowed
                        ? <button
                            onClick={handleUnfollowClick}
                            disabled={false}
                        >Unfollow</button>
                        : <button
                            onClick={handleFollowClick}
                            disabled={false}
                        >follow</button>
                }
            </div>
        </div>
    )
}

export const ProfileWithRedirect = compose(withLoginRedirect)(Profile)