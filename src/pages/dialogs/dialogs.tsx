import s from './dialogs.module.css'

// - Components

import { Messages } from "../../components/messages/messages.tsx";
import { DialogsForm } from "../../components/dialogsForm";
import { DialogsList } from "../../components/dialogsList";

// - HOC

import { withLoginRedirect } from "../../hoc/login-redirect.tsx";

// --------------------

// - Types

export interface MessageTypes {
    text: string
}

export interface DialogsProps {
    messages: MessageTypes[]
}

// ------------------------

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={s.dialogs}>
            <div>
                <DialogsList />
            </div>
            <div>
                <Messages messages={props.messages} />
                <DialogsForm />
            </div>
        </div>
    )
}

export const DialogsWithRedirect = withLoginRedirect(Dialogs)