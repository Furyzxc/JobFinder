import {useEffect} from "react";
import {  ProfileWithRedirect} from "./profile";
import {useAppDispatch, useAppSelector, useUserIdFromParams} from "../../app/hooks";
import { getIsFollowed, getUserStatus, setUserProfile } from "../../features/profile";
import {batch} from "react-redux";
import {useParams} from "react-router-dom";


export const ProfileContainer = () => {

    const dispatch = useAppDispatch()

    const { id } = useAppSelector(state => state.auth.userInfo)

    const userID = useUserIdFromParams(id)

    // If in url no user id then it is your profile

    const { userId } = useParams()
    const isOwner = !userId

    // ---------------------

    useEffect(() => {
        batch(() => {
            dispatch(setUserProfile(userID))
            dispatch(getUserStatus(userID))
            dispatch(getIsFollowed(userID))
        })
    }, [dispatch, userID]);

    return <ProfileWithRedirect isOwner={isOwner} />
}
