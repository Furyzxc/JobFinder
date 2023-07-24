import s from "./sendBtn.module.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { setDialogName, useStartChattingMutation } from "@/slices/dialogs";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks.ts";

interface PropsType {
    fullName: string
    userId: number
}

export const ProfileSendBtn = ({fullName, userId}: PropsType) => {
    const dispatch = useAppDispatch()

    const [startChatting, {data, isSuccess}] = useStartChattingMutation()
    const [isChattingAccepted, setIsChattingAccepted] = useState(false)

    // sends request on endpoint after click on send message button
    const handleSendBtnClick = () => {
        startChatting(userId)
        dispatch(setDialogName(fullName))
    }

    // Navigates to dialogs page after success response from server

    useEffect(() => {
        if (isSuccess && data && data.resultCode === 0) setIsChattingAccepted(true)
    }, [data, isSuccess]);

    if (isChattingAccepted) return <Navigate to={'/dialogs/' + userId}/>

    return (
        <span className={s.send}>
            <Button variant='outlined' onClick={handleSendBtnClick} sx={{width: '140px'}}>
                Send Message
            </Button>
        </span>
    );
};