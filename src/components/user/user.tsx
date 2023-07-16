import s from './user.module.css'

import { Link } from "react-router-dom";

import defaultAvatar from '../../assets/defaultAvatar.jpg'
import {Avatar, Button} from "@mui/material";
import Box from "@mui/material/Box";

export interface UserProps {
    id: number,
    name: string,
    photos: {
        small: null | string,
        large: null | string
    }
    status: null | string
    followed: boolean
}

export const User = (props: UserProps) => {

    return (
        <Box sx={{display: 'block', width: '300px'}}>
        <Button variant='outlined' sx={{width: '100%'}}>
        <Link className={s.user} to={'/profile/' + props.id}>
            <div className={s.avatar}>
                <Avatar src={props.photos.small || defaultAvatar} alt='user avatar'/>
            </div>

            <div className={s.userInfo}>
                <div className={s.userName}>
                    {props.name}
                </div>
                <div className={s.status}>
                    {props.status}
                </div>
            </div>
        </Link>
        </Button>
        </Box>
    )
}