// Types & Styles

import s from './login.module.css'

// - Components

import { Preloader } from "../common";

// - Hooks

import { useAppDispatch } from "../../app/hooks.ts";
import { useState } from "react";

// - Actions

import { authLogin } from "../../features/auth";

// - Libraries

import React from "react";
import { Navigate } from "react-router-dom";

// ----------------------------

export interface LoginProps {
    isFetching: boolean
    isAuth: boolean
}

export const Login = (props: LoginProps) => {

    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (!email) setEmailPlaceholder('Please enter your email')
        if (!password) setPasswordPlaceholder("Please enter your password")

        console.log('form submitted')
        dispatch(authLogin({email, password, rememberMe, captcha: true}))
    }

    const handleRememberMeChange = () => setRememberMe(prev => !prev)


    if (props.isFetching) return <Preloader/>
    if (props.isAuth) return <Navigate to='/profile' />

    return (
        <div className={s.login}>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>
            <div className="animated bounceInDown">
                <div className="container">
                    <span className="error animated tada" id="msg"></span>
                    <form name="form1" className="box" onSubmit={handleFormSubmit}>
                        <h5>Sign in to your account.</h5>
                        <input type="text" name="email" placeholder={emailPlaceholder} autoComplete="off"
                               value={email} onChange={handleEmailChange}/>
                        <i className="typcn typcn-eye" id="eye"></i>
                        <input type="password" name="password" placeholder={passwordPlaceholder} id="pwd" autoComplete="off"
                               value={password} onChange={handlePasswordChange}/>
                        <label>
                            <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
                            <span></span>
                            <small className="rmb">Remember me</small>
                        </label>
                        <a href="#" className="forgetpass">Forget Password?</a>
                        <input type="submit" value="Sign in" className="btn1"/>
                    </form>
                    <a href="#" className="dnthave">Don’t have an account? Sign up</a>
                </div>
            </div>

        </div>
    )
}
