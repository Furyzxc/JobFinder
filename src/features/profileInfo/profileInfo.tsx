import s from './profileInfo.module.css'
import { useEffect } from 'react'
import { Status } from "@/entities/status";
import { DescriptionSection } from "@/entities/profileDescription";
import { setAvatar, setProfileName, useGetProfileQuery } from "@/slices/profile";
import { useAppDispatch } from "@/app/hooks.ts";

type PropsType = {
    isOwner: boolean
    id: number
}

export const ProfileInfo = ({id, isOwner}: PropsType) => {
    const dispatch = useAppDispatch()

    const {data, isSuccess} = useGetProfileQuery(id)

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setProfileName(data.fullName))
            dispatch(setAvatar(data.photos.small))
        }
    }, [data, dispatch, isSuccess]);

    return (
        <div className={s.userInfo}>
            <div className={s.main}>
                <div className={s.nickName}>
                    {data?.fullName}
                </div>
                <div className={s.status}>
                    <Status isOwner={isOwner} userId={id}/>
                </div>
            </div>
            {data && <DescriptionSection {...data}/>}
        </div>
    );
};