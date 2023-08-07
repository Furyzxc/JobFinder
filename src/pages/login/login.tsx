import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { LoginForm } from '@/features/loginForm'
import { getAuthLoading } from '@/slices/auth'
import s from './login.module.css'

export const Login = () => {
	const isLoading = useAppSelector(getAuthLoading)

	return (
		<WithLoading isLoading={isLoading}>
			<div className={s.container1}>
				<LoginForm />
			</div>
		</WithLoading>
	)
}
