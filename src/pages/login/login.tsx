import { LoginForm } from "@/features/loginForm";
import { useAppSelector } from "@/app/hooks.ts";
import { withLoading } from "@/shared/hoc/withLoading.tsx";
import { getAuthLoading } from "@/slices/auth";
import s from './login.module.css'

const WeakLogin = () => {

    return (
        <div className={s.container1}>
            <LoginForm/>
        </div>
    )
}

const LoginWithLoading = withLoading(WeakLogin)

export const Login = () => {
    const isLoading = useAppSelector(getAuthLoading)

    return <LoginWithLoading isLoading={isLoading}/>
}

