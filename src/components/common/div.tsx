import s from "../messages/messages.module.css";
import {ReactNode} from "react";

interface DivProps {
    children: ReactNode
}

export const Div = ({children}: DivProps) => {
    return (
        <div className={s.container}>
            <div className={s.new}>{children}</div>
        </div>
    );
};