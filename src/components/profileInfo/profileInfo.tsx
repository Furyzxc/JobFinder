import s from './profileInfo.module.css'
import {Status} from "../status";
import {DescriptionSection} from "./descriptionSection.tsx";

interface ProfileInfoProps {
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

export const ProfileInfo = ({photos, fullName, status, ...restProps}: ProfileInfoProps) => {

    const bigPhoto = photos.large

    return (
        <div className={s.userInfo}>
            <div className={s.bgImg}>
                {
                    bigPhoto
                        ? <img alt='Big bg picture in profile' src={bigPhoto}/>
                        : <div className={s.bgImgBody}></div>
                }
            </div>
            <div>
                <div className={s.underImgInfo}>
                    <div className={s.nickName}>
                        {fullName}
                    </div>
                    <div className={s.status}>
                        <Status statusText={status}/>
                    </div>
                </div>
                <DescriptionSection {...restProps}/>
            </div>
        </div>
    );
};