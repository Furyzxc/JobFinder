import s from "./btns.module.css";
import { ProfileSendBtn } from "@/entities/profileSendBtn/profileSendBtn.tsx";
import { Follow } from "@/entities/follow";

interface PropsType {
    userId: number
}

export const UserProfileBtns = ({userId}: PropsType) => {
    return (
        <div className={s.btns}>
            <ProfileSendBtn userId={userId}/>
            <Follow userId={userId}/>
        </div>
    );
};