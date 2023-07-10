import s from './user.module.css'

import { Link } from "react-router-dom";

import defaultAvatar from '../../assets/defaultAvatar.jpg'

export interface UserProps {
    id: number,
    name: string,
    photos: {
        small: null | string,
        large: null | string
    }
    status: null | string
}

export const User = (props: UserProps) => {

    return (
        <Link className={s.user} to={'/profile/' + props.id}>
            <div className={s.avatar}>
                <img src={props.photos.small || props.photos.large || defaultAvatar}
                alt='user avatar'/>
            </div>

            <div className={s.userInfo}>
                <div className={s.userName}>
                    {props.name}
                </div>
            </div>
        </Link>
    )
}