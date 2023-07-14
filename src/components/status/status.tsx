import { setStatus } from "../../features/profile";
import { useAppDispatch } from "../../app/hooks.ts";
import React from "react";
import {Input} from "../common/input.tsx";
import {Typography} from "@mui/material";

interface StatusProps {
    statusText: string | null
    isOwner: boolean
}


export const Status = ({statusText, isOwner}: StatusProps) => {
    const dispatch = useAppDispatch()
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => dispatch(setStatus(e.target.value))

    if (!isOwner) return <div>
        <Typography sx={{fontSize: 18, color: 'white', borderBottom: '2px solid #42A5F5', mb: '20px'}}> Status </Typography>
        <Typography variant='h6'>{statusText}</Typography></div>

    return (
        <Input
            name='Status'
            onBlur={handleBlur}
            key={1}
            value={statusText}
        />
    )
};
