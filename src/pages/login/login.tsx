import { LoginForm } from "@/features/loginForm";
import { useAppSelector } from "@/app/hooks.ts";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";
import { getAuthLoading } from "@/slices/auth";
import s from './login.module.css'

export const Login = () => {
    const isLoading = useAppSelector(getAuthLoading)

    return (
        <WithLoading isLoading={isLoading}>
            <div className={s.container1}>
                <LoginForm/>
            </div>
        </WithLoading>
    )
}

