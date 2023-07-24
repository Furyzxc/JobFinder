import s from "./btns.module.css";
import { ProfileSendBtn } from "@/entities/profileSendBtn/profileSendBtn.tsx";
import { Follow } from "@/entities/follow";

interface PropsType {
    fullName: string
    userId: number
    isFollowed: boolean
}

export const UserProfileBtns = ({userId, isFollowed, fullName}: PropsType) => {
    return (
        <div className={s.btns}>
            <ProfileSendBtn fullName={fullName} userId={userId}/>
            <Follow isFollowed={isFollowed} userId={userId}/>
        </div>
    );
};