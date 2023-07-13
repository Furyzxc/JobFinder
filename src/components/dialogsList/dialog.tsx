import {useAppDispatch} from "../../app/hooks.ts";
import {Link} from "react-router-dom";
import s from './dialogs.module.css'
import {GetDialogsResponse} from "../../types/api/dialogs-types.ts";
import {formatTime} from "../../utils/formatTime.ts";
import {useLazyGetMessagesQuery} from "../../api/dialogs-api.ts";
import {setDialogName, setMessages} from "../../features/dialogs";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export const Dialog = ({userName, id, lastDialogActivityDate, hasNewMessages}: GetDialogsResponse) => {
    const dispatch = useAppDispatch()


    const [getMessages] = useLazyGetMessagesQuery()

    const time = formatTime(lastDialogActivityDate)
    const handleClick = async () => {
        dispatch(setDialogName(userName))
        const {data} = await getMessages({id})
        if (data?.items) dispatch(setMessages(data.items))
    }

    return (
        <Link to={'/dialogs/' + id} onClick={handleClick} className={s.dialog}>
            <div>
                <div className={s.name}>
                    {userName}
                </div>
                <div className={s.time}>
                    {time}
                </div>
            </div>
            { hasNewMessages && <div className={s.icon}>
                <MailOutlineRoundedIcon fontSize='small' />
            </div> }
        </Link>
    );
};