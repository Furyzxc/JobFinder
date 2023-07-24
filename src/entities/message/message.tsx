import s from './message.module.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { formatTime } from "@/shared/utils/formatTime.ts";
import { MessageResponseType } from "@/shared/types/api/dialogs-types.ts";

interface MessageProps extends MessageResponseType {
    me: boolean
}

export const Message = ({body, addedAt, me, viewed}: MessageProps) => {
    const time = formatTime(addedAt)

    const clNames = [s.message, me ? s.myMessage : s.friendMessage]

    return (
        <div className={clNames.join(' ')}>
            <div className={s.text}>
                {body}
            </div>
            <div className={s.time}>
                {time}
            </div>
            <div className={s.tick}>
                <DoneAllIcon sx={{fontSize: '12px', color: viewed ? '#66B7F6' : 'white'}} />
            </div>
        </div>
    )
}