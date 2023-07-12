import {Message} from "./message.tsx";
import {useAppSelector, useUserIdFromParams} from "../../app/hooks.ts";
import s from './messages.module.css'
import {Div} from "../common/div.tsx";
import {getMessages} from "../../features/dialogs";
export const Messages = () => {
    const messages = useAppSelector(getMessages)
    const userChatId = useUserIdFromParams()

    return (
        <div className={s.messages}>
            <div className={s.flexbox}>
                {!messages[0] && <Div>Enter your first message</Div>}
                {messages.map((message, id) => (
                    <Message {...message} key={id}
                             clName={message.senderId === userChatId ? s.friendMessage : s.myMessage}/>
                ))}
            </div>
        </div>
    );
};