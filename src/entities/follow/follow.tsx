import { Button } from "@mui/material";
import { useState } from "react";
import { toggleIsFollowed } from "@/slices/profile";
import { useAppDispatch } from "@/app/hooks.ts";

interface FollowProps {
    isFollowed: boolean
    userId: number
}

export const Follow = ({isFollowed, userId}: FollowProps) => {
    const dispatch = useAppDispatch()

    const [isFollowingProgress, setIsFollowingProgress] = useState(false);

    const handleToggleFollow = (follow: boolean) => {
        dispatch(toggleIsFollowed({userId, follow}))
            .then(() => setIsFollowingProgress(false));
    }

    const handleFollowClick = () => handleToggleFollow(true)
    const handleUnfollowClick = () => handleToggleFollow(false)

    return isFollowed ? <Button variant='outlined' sx={{width: '140px'}}
                                onClick={handleUnfollowClick}
                                disabled={isFollowingProgress}
    >Unfollow</Button> : <Button variant='outlined' sx={{width: '140px'}}
                                 onClick={handleFollowClick}
                                 disabled={isFollowingProgress}
    >follow</Button>
};