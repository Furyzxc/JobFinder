import {useAppDispatch} from "../../app/hooks.ts";
import {Link} from "react-router-dom";
import s from './dialogs.module.css'
import {GetDialogsResponse} from "../../types/api/dialogs-types.ts";
import {formatTime} from "../../utils/formatTime.ts";
import {useLazyGetMessagesQuery} from "../../api/dialogs-api.ts";
import {setDialogName, setMessages} from "../../features/dialogs";


export const Dialog = ({userName, id, lastDialogActivityDate, hasNewMessages}: GetDialogsResponse) => {
    const dispatch = useAppDispatch()

    const clNms = [s.dialog, hasNewMessages ? s.newMsges : '', 'materialBtn' ]

    const [getMessages] = useLazyGetMessagesQuery()

    const time = formatTime(lastDialogActivityDate)
    const handleClick = async () => {
        dispatch(setDialogName(userName))
        const { data } = await getMessages({id})
        if (data?.items) dispatch(setMessages(data.items))
     }

    return (
        <Link to={'/dialogs/' + id} onClick={handleClick} className={clNms.join(' ')}>
            <div className={s.name}>
                {userName}
            </div>
            <div className={s.time}>
                {time}
            </div>
        </Link>
    );
};