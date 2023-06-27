import s from './friendProfile.module.css'
import defaultAvatar from '../../assets/defaultAvatar.jpg'

// - Hooks

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks.ts";

// - Actions

import { follow, setFriendProfile, unfollow } from "../../features/friendProfile";

import { Preloader } from "../common";

// ------------------------------------

export interface FriendProfileProps {
    isFetching: boolean
    isFollowed: boolean,
    isFollowingProgress: boolean

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
}

export const FriendProfile = (props: FriendProfileProps) => {

    const dispatch = useAppDispatch()

    const {userId = 0} = useParams()
    const userID = Number(userId)

    useEffect(() => {
        dispatch(setFriendProfile(userID))
    }, [dispatch, userID]);

    const handleFollowClick = () => dispatch(follow(userID))
    const handleUnfollowClick = () => dispatch(unfollow(userID))

    if (props.isFetching) return <Preloader/>

    return (
        <div className={s.friendProfile}>
            <div className={s.user}>
                <div className={s.avatar}>
                    <img
                        src={props.photos.large || props.photos.small || defaultAvatar}
                        alt='User avatar'/>
                </div>
                <div>
                    <div className={s.userName}>
                        {props.fullName}
                    </div>
                    <div>
                        {
                            props.lookingForAJob
                            && 'Hey I\'m looking for a job'
                        }
                    </div>
                    <div>
                        {props.lookingForAJobDescription}
                    </div>
                    <div>
                        {Object.values(props.contacts).map((contact, index) => (
                            <div key={index}>{contact}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                {
                    props.isFollowed
                        ? <button
                            onClick={handleUnfollowClick}
                            disabled={props.isFollowingProgress}
                        >Unfollow</button>
                        : <button
                            onClick={handleFollowClick}
                            disabled={props.isFollowingProgress}
                        >follow</button>
                }
            </div>
        </div>
    )
}