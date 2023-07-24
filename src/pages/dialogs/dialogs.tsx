import s from './dialogs.module.css'
import React from "react";

// - Components & HOC

import { Messages } from "@/features/messages";
import { DialogsForm } from "@/features/dialogsForm";
import { DialogsList } from "@/features/dialogsList";
import { Div } from "@/shared/ui/div/div.tsx";

// - Actions & Hooks

import { useAppSelector, useUserIdFromParams } from "@/app/hooks.ts";
import { getDialogName, getDialogs } from "@/slices/dialogs";


export const Dialogs = React.memo(() => {
    const dialogs = useAppSelector(getDialogs)
    const dialogName = useAppSelector(getDialogName)
    const {id} = useUserIdFromParams()

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <DialogsList dialogs={dialogs}/>
            </div>
            {!id ? (
                    <Div>Start chatting</Div>)
                : (
                    <div className={s.chatContainer + ' height'}>
                        <div className={s.title}>
                            {dialogName}
                        </div>
                        <div className={s.messages + ' scroll'}>
                                <Messages/>
                        </div>
                        <DialogsForm/>
                    </div>)
            }
        </div>
    )
})