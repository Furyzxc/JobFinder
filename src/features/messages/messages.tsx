import s from './messages.module.css'
import { useAppSelector, useUserIdFromParams } from "@/app/hooks.ts";
import { getMessages } from "@/slices/dialogs";
import { Message } from "@/entities/message";
import { Div } from "@/shared/ui/div/div.tsx";
import { withLoading } from "@/shared/hoc/withLoading.tsx";

const Messages = () => {
    const messages = useAppSelector(getMessages)
    const {id} = useUserIdFromParams()

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
