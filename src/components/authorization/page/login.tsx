import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAuth } from '../model/hooks.ts'
import { LoginForm } from '@/components/authorization/features/loginForm'
import s from '@/components/authorization/page/login.module.css'

export const Login = () => {
	const { isLoading } = useAuth()

	return (
		<WithLoading isLoading={isLoading}>
			<div className={s.container1}>
				<LoginForm />
			</div>
		</WithLoading>
	)
}
