import s from './dialogs.module.css'
import React from "react";
import {compose} from "@reduxjs/toolkit";

// - Components

import { Messages } from "../../components/messages/messages.tsx";
import { DialogsForm } from "../../components/dialogsForm";
import { DialogsList } from "../../components/dialogsList";

// - HOC

import { withLoginRedirect } from "../../hoc/login-redirect.tsx";
import {withLoading} from "../../hoc/withLoading.tsx";
import {useAppSelector} from "../../app/hooks.ts";
import {getDialogName, getDialogs} from "../../features/dialogs";

// --------------------



// ------------------------

export const Dialogs = React.memo(() => {
    const dialogs = useAppSelector(getDialogs)
    const dialogName = useAppSelector(getDialogName)

    return (
        <div className={s.dialogs}>
            <div>
                <DialogsList dialogs={dialogs}/>
            </div>
            <div className={s.chatContainer}>
                <div className={s.title}>
                    {dialogName}
                </div>
                <Messages />
                <DialogsForm />
            </div>
        </div>
    )
})

export const DialogsWithRedirect = compose(withLoading, withLoginRedirect)(Dialogs)