import {useEffect} from "react";
import { ProfileWithLoading } from "./profile";
import {useAppDispatch, useAppSelector, useUserIdFromParams} from "../../app/hooks";
import {getProfileLoading, getUserData} from "../../features/profile";
import {withLoginRedirect} from "../../hoc/login-redirect.tsx";


const ProfileContainer = () => {

    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(getProfileLoading)

    const { id: myId } = useAppSelector(state => state.auth.userInfo)

    const {id, isOwner} = useUserIdFromParams(myId)


    useEffect(() => {
        dispatch(getUserData(id))
    }, [dispatch, id]);

    return <ProfileWithLoading isOwner={isOwner} isLoading={isLoading} />
}

export const ProfileWithRedirect = withLoginRedirect(ProfileContainer)