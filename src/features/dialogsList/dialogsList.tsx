import { Dialog } from "@/entities/dialog";
import s from './dialogs.module.css'
import { DialogsResponse } from "@/shared/types/api/dialogs-types.ts";
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { requestDialogs, selectDialogsListLoading } from "@/slices/dialogs";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";
import React, { useEffect } from "react";

interface DialogsListProps {
    dialogs: DialogsResponse[]
}

export const DialogsList = React.memo(({dialogs}: DialogsListProps) => {
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(selectDialogsListLoading)

    useEffect(() => {
        dispatch(requestDialogs())
    }, [dispatch]);


    return (
        <WithLoading isLoading={isLoading}>
            <div className={s.dialogs + ' scroll height'}>
                {dialogs.map(dialog => <Dialog key={dialog.id} {...dialog} />)}
            </div>
        </WithLoading>
    );
})