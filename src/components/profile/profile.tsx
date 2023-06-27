import s from './profile.module.css'

// - Components
import { Posts } from "../posts";

// - Types
import { ProfileProps } from "./profile.types.ts";

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.profile}>
            <div className={s.user}>
                <div className={s.avatar}>
                    <img src={props.image}/>
                </div>
                <div>
                    <div className={s.userName}>
                        {props.userInfo.name}
                    </div>
                    <div>
                        Date of Birth: {props.userInfo.birthDate}
                    </div>
                    <div>
                        City: {props.userInfo.city}
                    </div>
                    <div>
                        Education: {props.userInfo.education}
                    </div>
                    <div>
                        website: {props.userInfo.url}
                    </div>
                </div>
            </div>
            <div>
                <Posts />
            </div>
        </div>
    )
}