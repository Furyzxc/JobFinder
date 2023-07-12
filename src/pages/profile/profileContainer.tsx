import {useEffect} from "react";
import {  ProfileWithRedirect} from "./profile";
import {useAppDispatch, useAppSelector, useUserIdFromParams} from "../../app/hooks";
import { getIsFollowed, getUserStatus, setUserProfile } from "../../features/profile";
import {batch} from "react-redux";


export const ProfileContainer = () => {

    const dispatch = useAppDispatch()

    const { id } = useAppSelector(state => state.auth.userInfo)

    const userID = useUserIdFromParams(id)

    useEffect(() => {
        batch(() => {
            dispatch(setUserProfile(userID))
            dispatch(getUserStatus(userID))
            dispatch(getIsFollowed(userID))
        })
    }, [dispatch, userID]);

    return <ProfileWithRedirect />
}
