import s from './user.module.css'

import { Link } from "react-router-dom";

import defaultAvatar from '../../assets/defaultAvatar.jpg'
import {Avatar, Button, Typography} from "@mui/material";
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
        <Box sx={{display: 'block', width: '210px'}}>
        <Button variant='outlined' sx={{width: '100%', textTransform: 'none'}}>
        <Link className={s.user} to={'/profile/' + props.id}>
            <div className={s.avatar}>
                <Avatar src={props.photos.small || defaultAvatar} alt='user avatar'/>
            </div>

            <div className={s.userInfo}>
                <div className={s.userName}>
                    {props.name}
                </div>
                <Typography className={s.status} sx={{color: 'grey'}}>
                    {props.status}
                </Typography>
            </div>
        </Link>
        </Button>
        </Box>
    )
}