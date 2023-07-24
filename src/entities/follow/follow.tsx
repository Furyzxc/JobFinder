import { Button } from "@mui/material";
import { useState } from "react";
import { toggleIsFollowed } from "@/slices/profile";
import { useAppDispatch } from "@/app/hooks.ts";
import React from 'react'

interface FollowProps {
    isFollowed: boolean
    userId: number
}

export const Follow = React.memo(({isFollowed, userId}: FollowProps) => {
    const dispatch = useAppDispatch()

    // for button disabling
    const [isFollowingProgress, setIsFollowingProgress] = useState(false);

    // dispatch thunk on button click and after its execution enable button
    const handleToggleFollow = (follow: boolean) => {
        setIsFollowingProgress(true)
        dispatch(toggleIsFollowed({userId, follow}))
            .then(() => setIsFollowingProgress(false));
    }

    const handleFollowClick = () => handleToggleFollow(true)
    const handleUnfollowClick = () => handleToggleFollow(false)

    return (
        <span>{
            isFollowed
                ? <Button variant='outlined' sx={{width: '140px'}}
                          onClick={handleUnfollowClick}
                          disabled={isFollowingProgress}
                >Unfollow</Button>
                : <Button variant='outlined' sx={{width: '140px'}}
                          onClick={handleFollowClick}
                          disabled={isFollowingProgress}
                >follow</Button>
        }</span>
    )
});