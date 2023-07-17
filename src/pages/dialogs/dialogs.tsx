import s from './dialogs.module.css'
import React from "react";

// - Components & HOC

import {LoadingMessages} from "../../components/messages";
import {DialogsForm} from "../../components/dialogsForm";
import {DialogsList} from "../../components/dialogsList";
import {Div} from "../../components/common/div.tsx";
import {withLoading} from "../../hoc/withLoading.tsx";

// - Actions & Hooks

import {useAppSelector, useUserIdFromParams} from "../../app/hooks.ts";
import {getDialogName, getDialogs, getDialogsLoading} from "../../features/dialogs";



export const Dialogs = React.memo(() => {
    const dialogs = useAppSelector(getDialogs)
    const dialogName = useAppSelector(getDialogName)
    const isLoading = useAppSelector(getDialogsLoading)
    const { id } = useUserIdFromParams()

    return (

        <div className={s.dialogs}>
            <div>
                <DialogsList dialogs={dialogs}/>
            </div>
            {!id ? (
                    <Div>Start chatting</Div>)
                : (
                    <div className={s.chatContainer + ' phone'}>
                        <div className={s.title}>
                            {dialogName}
                        </div>
                        <div className={s.messages + ' scroll'}>
                        <LoadingMessages isLoading={isLoading}/>
                        </div>
                        <DialogsForm/>
                    </div>)
            }
        </div>
    )
})

export const DialogsWithLoading = withLoading(Dialogs)