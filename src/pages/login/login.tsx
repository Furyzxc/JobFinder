// Types & Styles

import s from './login.module.css'

// - Components

import { LoginForm } from "../../components/loginForm";

// - Libraries

import { Navigate } from "react-router-dom";

// ----------------------------

export interface LoginProps {
    isAuth: boolean
}

export const Login = ({isAuth}: LoginProps) => {

    if (isAuth) return <Navigate to='/profile' />

    return (
        <div className={s.login}>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>
            <div className="animated bounceInDown">
                <div className="container1">
                    <span className="error animated tada" id="msg"></span>
                   <LoginForm />
                    <a href="#" className="dnthave">Don’t have an account? Sign up</a>
                </div>
            </div>
        </div>
    )
}
