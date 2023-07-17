import {Message} from "./message.tsx";
import {useAppSelector, useUserIdFromParams} from "../../app/hooks.ts";
import s from './messages.module.css'
import {Div} from "../common/div.tsx";
import {getMessages} from "../../features/dialogs";
import {withLoading} from "../../hoc/withLoading.tsx";
const Messages = () => {
    const messages = useAppSelector(getMessages)
    const { id} = useUserIdFromParams()

    return (
            <div className={s.flexbox}>
                {!messages[0] && <Div>Enter your first message</Div>}
                {messages.map(message => (
                    <Message {...message} key={message.id}
                             clName={message.senderId === id ? s.friendMessage : s.myMessage}/>
                ))}
            </div>
    );
};

export const LoadingMessages = withLoading(Messages)
