import s from './profileInfo.module.css'
import {Status} from "../status";
import {DescriptionSection} from "./descriptionSection.tsx";

interface ProfileInfoProps {
    isOwner: boolean

    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string

    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

    photos: {
        small: string | null
        large: string | null
    }

    status: null | string
}

export const ProfileInfo = ({fullName, status, isOwner, ...restProps}: ProfileInfoProps) => {

    return (
        <div className={s.userInfo}>
                <div className={s.main}>
                    <div className={s.nickName}>
                        {fullName}
                    </div>
                    <div className={s.status}>
                        <Status statusText={status} isOwner={isOwner}/>
                    </div>
                </div>
                <DescriptionSection {...restProps}/>
            </div>
    );
};