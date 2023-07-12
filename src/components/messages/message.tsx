import {MessageResponseType} from "../../types/api/dialogs-types.ts";
import s from './messages.module.css'
import {formatTime} from "../../utils/formatTime.ts";

interface MessageProps extends MessageResponseType {
    clName: string
}

export const Message = (props: MessageProps) => {
    const time = formatTime(props.addedAt)

    return (
        <div className={props.clName + ' ' + s.message}>
            <div className={s.text}>
                {props.body}
            </div>
            <div className={s.time}>
                {time}
            </div>
        </div>
    )
}