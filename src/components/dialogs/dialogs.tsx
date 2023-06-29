import s from './dialogs.module.css'

import React, { useState } from "react";

import { Message } from "../message";

export interface MessageTypes {
    text: string
}


export const Dialogs = () => {

    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState<MessageTypes[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setInputValue(text)
    }

    const sendMessage = () => {
        setMessages([...messages, {text: inputValue}])
        setInputValue('')
    }

    const handleSendClick = () => sendMessage()

    const handleEnterKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                {messages?.map((message, index) => <Message key={index} {...message} />)}
            </div>
            <div>
                <input className={s.input}
                       value={inputValue}
                       placeholder='Write a message...'
                       onChange={handleInputChange}
                       onKeyUp={handleEnterKeyUp}/>
                <button onClick={handleSendClick}>Send</button>
            </div>
        </div>
    )
}