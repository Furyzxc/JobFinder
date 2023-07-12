import {Dialog} from "./dialog.tsx";
import {GetDialogsResponse} from "../../types/api/dialogs-types.ts";
import s from './dialogs.module.css'

interface DialogsListProps {
    dialogs: GetDialogsResponse[]
}

export const DialogsList = ({dialogs}: DialogsListProps) => {
    return (
        <div className={s.dialogs}>
            {dialogs.map(dialog => <Dialog key={dialog.id} {...dialog} />)}
        </div>
    );
};