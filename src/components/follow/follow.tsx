import {Button} from "@mui/material";
import {useState} from "react";
import {toggleIsFollowed} from "../../features/profile";
import {useAppDispatch} from "../../app/hooks.ts";

interface FollowProps {
    isFollowed: boolean
    userId: number
}

export const Follow = ({isFollowed, userId}: FollowProps) => {
    const dispatch = useAppDispatch()

    const [isFollowingProgress, setIsFollowingProgress] = useState(false);

    const handleToggleFollow = (follow: boolean) => {
            dispatch(toggleIsFollowed({userId, follow})).then(({payload}) => {
                // @ts-ignore
                if (payload.resultCode === 0) setIsFollowingProgress(false);
            });
        }

    const handleFollowClick = () => handleToggleFollow(true)
    const handleUnfollowClick = () => handleToggleFollow(false)

    return isFollowed ? <Button variant='outlined'
                      onClick={handleUnfollowClick}
                      disabled={isFollowingProgress}
            >Unfollow</Button>
            : <Button variant='outlined'
                      onClick={handleFollowClick}
                      disabled={isFollowingProgress}
            >follow</Button>
};