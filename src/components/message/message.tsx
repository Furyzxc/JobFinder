import s from './message.module.css'

import { MessageProps } from "./message.types.ts";


export const Message = (props: MessageProps) => {

    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}