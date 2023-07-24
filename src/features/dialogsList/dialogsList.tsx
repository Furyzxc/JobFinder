import { Dialog } from "@/entities/dialog";
import s from './dialogs.module.css'
import { DialogsResponse } from "@/shared/types/api/dialogs-types.ts";

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