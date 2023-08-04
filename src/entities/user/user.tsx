import s from './user.module.css'

import { Link } from "react-router-dom";
import { Avatar, Button, Typography } from "@mui/material";
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

export const COLORS = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    // '#cddc39',
    // '#ffeb3b', TOO LIGHT
    // '#ffc107',
    '#ff9800',
    '#ff5722'
] as const

export const User = ({name, status, photos, id}: UserProps) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]

    return (
        <Box sx={{display: 'block', width: '210px'}}>
            <Button variant='outlined' sx={{width: '100%', textTransform: 'none', minWidth: '100%'}} disableRipple>
                <Link className={s.user} to={'/profile/' + id}>
                    <div className={s.userName}>
                        {name}
                    </div>

                    <div className={s.userInfo}>
                        <div className={s.avatar}>
                            {photos.small
                                ? <Avatar src={photos.small} alt='user avatar'/>
                                : <Avatar sx={{backgroundColor: randomColor}}
                                          alt='user avatar'>{name[0].toUpperCase()}</Avatar>}
                        </div>
                        <Typography className={s.status} sx={{color: 'grey', fontSize: '12px'}}>
                            {status}
                        </Typography>
                    </div>
                </Link>
            </Button>
        </Box>
    )
}