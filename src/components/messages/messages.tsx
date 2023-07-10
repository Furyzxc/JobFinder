import { MessageTypes } from "../../pages/dialogs";
import { Message } from "../message";

interface MessagesProps {
    messages: MessageTypes[]
}

export const Messages = (props: MessagesProps) => {
    return (
        <div>
            {props.messages.map((message, id) => <Message {...message} key={id} />)}
        </div>
    );
};