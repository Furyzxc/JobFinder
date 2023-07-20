import {Dialog} from "./dialog.tsx";
import {DialogsResponse} from "../../types/api/dialogs-types.ts";
import s from './dialogs.module.css'

interface DialogsListProps {
    dialogs: DialogsResponse[]
}

export const DialogsList = ({dialogs}: DialogsListProps) => {
    return (
        <div className={s.dialogs + ' scroll height'}>
            {dialogs.map(dialog => <Dialog key={dialog.id} {...dialog} />)}
        </div>
    );
};