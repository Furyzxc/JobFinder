import s from "./sendBtn.module.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { setDialogName, useStartChattingMutation } from "@/slices/dialogs";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { selectProfileName } from "@/slices/profile";

interface PropsType {
    userId: number
}

export const ProfileSendBtn = ({userId}: PropsType) => {
    const dispatch = useAppDispatch()
    const userName = useAppSelector(selectProfileName)

    const [startChatting, {data, isSuccess, isLoading}] = useStartChattingMutation()
    const [isChattingAccepted, setIsChattingAccepted] = useState(false)

    // sends request on endpoint after click on send message button
    const handleSendBtnClick = () => {
        if (userName) {
            startChatting(userId)
            dispatch(setDialogName(userName))
        }
    }

    // Navigates to dialogs page after success response from server

    useEffect(() => {
        if (isSuccess && data && data.resultCode === 0) setIsChattingAccepted(true)
    }, [data, isSuccess]);

    if (isChattingAccepted) return <Navigate to={'/dialogs/' + userId}/>

    return (
        <span className={s.send}>
            <Button variant='outlined' onClick={handleSendBtnClick} sx={{width: '140px'}} disabled={isLoading}>
                Send Message
            </Button>
        </span>
    );
};