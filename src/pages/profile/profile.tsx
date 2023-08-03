import s from './profile.module.css'
import { useAppSelector, useUserIdFromParams } from "@/app/hooks.ts";
import { ProfileInfo } from "@/features/profileInfo";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";
import { UserProfileBtns } from "@/features/userProfileBtns";
import { selectProfileLoading } from "@/slices/profile";
import { LogoutBtn } from "@/entities/logoutBtn/logoutBtn.tsx";


export const Profile = () => {
    const isLoading = useAppSelector(selectProfileLoading)
    const {id: myId} = useAppSelector(state => state.auth.userInfo)

    // if no user id in url then returns owner id
    const {id, isOwner} = useUserIdFromParams(myId)

    return (
        <WithLoading isLoading={isLoading}>
            <div className={s.profile}>
                {isOwner && <div className={s.navigation}>
                    <LogoutBtn/>
                </div>}
                <div>
                    <ProfileInfo id={id} isOwner={isOwner}/>
                </div>
                <div>
                    {!isOwner && <UserProfileBtns userId={id}/>}
                </div>
            </div>
        </WithLoading>
    )
}
