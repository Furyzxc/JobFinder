import { useEffect } from 'react'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import {
	useAppDispatch,
	useAppSelector,
	useUserIdFromParams,
} from '@/shared/model/hooks.ts'
import { LogoutBtn } from '@/entities/logoutBtn/logoutBtn.tsx'
import { ProfileInfo } from '@/features/profileInfo'
import { UserProfileBtns } from '@/features/userProfileBtns'
import {
	requestProfileDataThunk,
	selectProfileError,
	selectProfileLoading,
} from '@/slices/profile'
import s from './profile.module.css'

export const Profile = () => {
	const isLoading = useAppSelector(selectProfileLoading)
	const isError = useAppSelector(selectProfileError)

	const { id: myId } = useAppSelector(state => state.auth.userInfo)

	// if no user id in url then returns owner id
	const { id, isOwner } = useUserIdFromParams(myId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(requestProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError}>
				<div className={s.profile}>
					{isOwner && (
						<div className={s.navigation}>
							<LogoutBtn />
						</div>
					)}
					<div>
						<ProfileInfo id={id} isOwner={isOwner} />
					</div>
					<div>{!isOwner && <UserProfileBtns userId={id} />}</div>
				</div>
			</WithError>
		</WithLoading>
	)
}
