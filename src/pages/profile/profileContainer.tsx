import {useEffect} from "react";
import {ProfileProps, ProfileWithRedirect} from "./profile";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {useParams} from "react-router-dom";
import { getIsFollowed, getUserStatus, setUserProfile } from "../../features/profile";


export const ProfileContainer = (props: ProfileProps) => {

    const dispatch = useAppDispatch()

    const { id } = useAppSelector(state => state.auth.userInfo)

    const {userId = id} = useParams()
    const userID = Number(userId)

    useEffect(() => {
        Promise.all([
            dispatch(setUserProfile(userID)),
            dispatch(getUserStatus(userID)),
            dispatch(getIsFollowed(userID))
        ]).then(() => console.log('done'))
    }, [dispatch, userID]);

    return <ProfileWithRedirect {...props} />
};