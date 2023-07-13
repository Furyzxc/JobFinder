import {MessageResponseType} from "../../types/api/dialogs-types.ts";
import s from './messages.module.css'
import {formatTime} from "../../utils/formatTime.ts";
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
                {/*// @ts-ignore*/}
                <DoneAllIcon fontSize='12' sx={{color: viewed ? '#66B7F6' : 'white'}} />
            </div>
        </div>
    )
}