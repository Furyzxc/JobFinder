import s from './userInfo.module.css'
import { Status } from "../status";

interface UserInfoProps {
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

export const UserInfo = (props: UserInfoProps) => {

    return (
        <div className={s.userInfo}>

            <div>
                <div className={s.underImgInfo}>
                    <div className={s.status}>
                        <Status statusText={props.status}/>
                    </div>
                    <div className={s.nickName}>
                        {props.fullName}
                    </div>
                </div>
                <div>
                    {
                        props.lookingForAJob
                        && 'Hey I\'m looking for a job'
                    }
                </div>
                <div>
                    {props.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
};