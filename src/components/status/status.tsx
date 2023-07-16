import {setStatus} from "../../features/profile";
import {useAppDispatch} from "../../app/hooks.ts";
import React from "react";
import {Input} from "../common/input.tsx";
import {Typography} from "@mui/material";
import s from '../profileInfo/profileInfo.module.css'

interface StatusProps {
    statusText: string | null
    isOwner: boolean
}


export const Status = ({statusText, isOwner}: StatusProps) => {
    const dispatch = useAppDispatch()
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => dispatch(setStatus(e.target.value))

    if (!isOwner) return <div className={s.userStatus}>
        <Typography
            sx={{fontSize: 18, color: 'white', borderBottom: '2px solid #42A5F5', mb: '20px'}}> Status </Typography>
        <Typography variant='h6'>{statusText || <span style={{color: 'grey'}}>User did not enter status</span>}</Typography></div>

    return (
        <Input
            name='Status'
            onBlur={handleBlur}
            key={1}
            value={statusText}
        />
    )
};
