import {LoginForm} from "../../components/loginForm";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {getAuth} from "../../features/app";
import s from './login.module.css'
import {withLoading} from "../../hoc/withLoading.tsx";
import {getAuthLoading} from "../../features/auth";

const WeakLogin = () => {

    const isAuth = useAppSelector(getAuth)

    if (isAuth) return <Navigate to='/profile'/>

    return (
        <div className={s.container1}>
            <LoginForm/>
        </div>
    )
}

const LoginWithLoading = withLoading(WeakLogin)

export const Login = () => {
    const isLoading = useAppSelector(getAuthLoading)

    return <LoginWithLoading isLoading={isLoading} />
}

