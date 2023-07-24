import s from './message.module.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { formatTime } from "@/shared/utils/formatTime.ts";
import { MessageResponseType } from "@/shared/types/api/dialogs-types.ts";

interface MessageProps extends MessageResponseType {
    clName: string
}

export const Message = ({body, addedAt, clName, viewed}: MessageProps) => {
    const time = formatTime(addedAt)

    return (
        <div className={clName + ' ' + s.message}>
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