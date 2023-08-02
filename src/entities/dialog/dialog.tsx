import s from './dialog.module.css'
import { DialogsResponse } from "@/shared/types/api/dialogs-types.ts";
import { formatTime } from "@/shared/utils/formatTime.ts";
import { useAppDispatch } from "@/app/hooks.ts";
import { setDialogName } from "@/slices/dialogs";
import { Link } from "react-router-dom";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export const Dialog = ({userName, id, lastDialogActivityDate, hasNewMessages}: DialogsResponse) => {
    const dispatch = useAppDispatch()

    const time = formatTime(lastDialogActivityDate)
    const handleClick = () => {
        dispatch(setDialogName(userName))
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
}