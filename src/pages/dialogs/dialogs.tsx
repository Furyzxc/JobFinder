import s from './dialogs.module.css'
import React from "react";
import {compose} from "@reduxjs/toolkit";

// - Components

import {LoadingMessages} from "../../components/messages";
import {DialogsForm} from "../../components/dialogsForm";
import {DialogsList} from "../../components/dialogsList";

// - HOC

import {withLoginRedirect} from "../../hoc/login-redirect.tsx";
import {withLoading} from "../../hoc/withLoading.tsx";
import {useAppSelector, useUserIdFromParams} from "../../app/hooks.ts";
import {getDialogName, getDialogs, getDialogsLoading} from "../../features/dialogs";
import {Div} from "../../components/common/div.tsx";

// --------------------


// ------------------------

export const Dialogs = React.memo(() => {
    const dialogs = useAppSelector(getDialogs)
    const dialogName = useAppSelector(getDialogName)
    const isLoading = useAppSelector(getDialogsLoading)
    const userId = useUserIdFromParams()

    return (

        <div className={s.dialogs}>
            <div>
                <DialogsList dialogs={dialogs}/>
            </div>
            {!userId ? (
                    <Div>Start chatting</Div>)
                : (
                    <div className={s.chatContainer}>
                        <div className={s.title}>
                            {dialogName}
                        </div>
                        <div className={s.messages}>
                        <LoadingMessages isLoading={isLoading}/>
                        </div>
                        <DialogsForm/>
                    </div>)
            }
        </div>
    )
})

export const DialogsWithRedirect = compose(withLoading, withLoginRedirect)(Dialogs)