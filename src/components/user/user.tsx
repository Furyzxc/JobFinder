import s from './user.module.css'

import { Link } from "react-router-dom";

import defaultAvatar from '../../assets/defaultAvatar.jpg'

import { UserProps } from "./user.types.ts";

export const User = (props: UserProps) => {

    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <img src={props.photos.small || props.photos.large || defaultAvatar}/>
            </div>

            <Link className={s.userInfo} to={'/profile/' + props.id}>
                <div className={s.userName}>
                    {props.name}
                </div>
                <div className={s.userStatus}>
                    {props.status || 'Here Has To Be Status'}
                </div>
            </Link>
        </div>
    )
}