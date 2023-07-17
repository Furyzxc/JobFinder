import {useEffect} from "react";
import {Profile} from "./profile";
import {useAppDispatch, useAppSelector, useUserIdFromParams} from "../../app/hooks";
import { getIsFollowed, getUserStatus, setUserProfile } from "../../features/profile";
import {batch} from "react-redux";
import {withLoginRedirect} from "../../hoc/login-redirect.tsx";


const ProfileContainer = () => {

    const dispatch = useAppDispatch()

    const { id: myId } = useAppSelector(state => state.auth.userInfo)

    const {id, isOwner} = useUserIdFromParams(myId)


    useEffect(() => {
        batch(() => {
            dispatch(setUserProfile(id))
            dispatch(getUserStatus(id))
            dispatch(getIsFollowed(id))
        })
    }, [dispatch, id]);

    return <Profile isOwner={isOwner} />
}

export const ProfileWithRedirect = withLoginRedirect(ProfileContainer)