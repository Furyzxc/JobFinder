import defaultAvatar from '@/assets/defaultAvatar.jpg'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks.ts'
import s from '@/pages/profile/profile.module.css'
import { authLogout } from '@/slices/auth'
import { selectProfileAvatar } from '@/slices/profile'

export const LogoutBtn = () => {
	const dispatch = useAppDispatch()

	const avatar = useAppSelector(selectProfileAvatar)

	// sign out from account
	const handleLogout = () => dispatch(authLogout())

	return (
		<button className={s.button}>
			<img alt='avatar' src={avatar || defaultAvatar} />
			<div className={s.logout} onClick={handleLogout}>
				LOGOUT
			</div>
		</button>
	)
}
