import s from './messages.module.css'
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { getDialogsLoading, getMessages, requestMessages } from "@/slices/dialogs";
import { Message } from "@/entities/message";
import { Div } from "@/shared/ui/div/div.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";

export const Messages = () => {
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(getDialogsLoading)
    const messages = useAppSelector(getMessages)
    const { userId } = useParams()
    
    const id = Number(userId)

    useEffect(() => {
        if (userId) dispatch(requestMessages({id}))
    }, [dispatch, id, userId]);
    

    return (
        <WithLoading isLoading={isLoading}>
        <div className={s.flexbox}>
            {!messages[0] && <Div>Enter your first message</Div>}
            {messages.map(message => (
                <Message {...message} key={message.id}
                         me={message.senderId !== id}/>
            ))}
        </div>
        </WithLoading>
    );
};