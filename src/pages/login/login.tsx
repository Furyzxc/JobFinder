import {LoginForm} from "../../components/loginForm";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {getAuth} from "../../features/app";


export const Login = () => {

    const isAuth = useAppSelector(getAuth)

    if (isAuth) return <Navigate to='/profile'/>

    return (
        <div className="container1">
            <LoginForm/>
        </div>
    )
}
