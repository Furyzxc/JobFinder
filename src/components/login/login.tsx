// Types & Styles

import s from './login.module.css'
import { LoginProps } from "./login.types.ts";

// - Components

import { Preloader } from "../common";

// - Hooks

import { useAppDispatch } from "../../app/hooks.ts";
import { useState } from "react";

// - Actions

import {
    authMe
} from "../../features/auth";

// - Libraries

import React from "react";

// ----------------------------

export const Login = (props: LoginProps) => {

    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('form submitted')
        dispatch(authMe({email, password, rememberMe, captcha: true}))
    }

    if (props.isFetching) return <Preloader />

    return (
        <div className={s.login}>
            <form onSubmit={handleFormSubmit}>
                <input type='text'
                       value={email}
                       onChange={handleEmailChange}/>
                <input type='text'
                       value={password}
                       onChange={handlePasswordChange}/>
                <input type='checkbox'></input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
