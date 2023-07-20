import {useAppDispatch} from "../../app/hooks.ts";
import {Link} from "react-router-dom";
import s from './dialogs.module.css'
import {DialogsResponse} from "../../types/api/dialogs-types.ts";
import {formatTime} from "../../utils/formatTime.ts";
import {requestMessages, setDialogName} from "../../features/dialogs";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export const Dialog = ({userName, id, lastDialogActivityDate, hasNewMessages}: DialogsResponse) => {
    const dispatch = useAppDispatch()

    const time = formatTime(lastDialogActivityDate)

    const handleClick = () => {
        dispatch(setDialogName(userName))
        dispatch(requestMessages({id}))
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