import {LoginForm} from "../../components/loginForm";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {getAuth} from "../../features/app";
import s from './login.module.css'

export const Login = () => {

    const isAuth = useAppSelector(getAuth)

    if (isAuth) return <Navigate to='/profile'/>

    return (
        <div className={s.container1}>
            <LoginForm/>
        </div>
    )
}
