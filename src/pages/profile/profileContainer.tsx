import { useEffect } from "react";
import { ProfileWithLoading } from "./profile";
import { useAppDispatch, useAppSelector, useUserIdFromParams } from "@/app/hooks.ts";
import { getProfileLoading, getUserData } from "@/slices/profile";


export const ProfileContainer = () => {

    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(getProfileLoading)

    const {id: myId} = useAppSelector(state => state.auth.userInfo)

    const {id, isOwner} = useUserIdFromParams(myId)


    useEffect(() => {
        dispatch(getUserData(id))
    }, [dispatch, id]);

    return <ProfileWithLoading isOwner={isOwner} isLoading={isLoading}/>
}