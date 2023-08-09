import { useEffect } from 'react'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import {
	useAppDispatch,
	useAppSelector,
	useProfileLoadingError,
	useUserDetails,
} from '@/shared/model/hooks.ts'
import { LogoutBtn } from '@/entities/logoutBtn/logoutBtn.tsx'
import { ProfileInfo } from '@/features/profileInfo'
import { UserProfileBtns } from '@/features/userProfileBtns'
import { requestProfileDataThunk } from '@/slices/profile'
import s from './profile.module.css'

export const Profile = () => {
	const { isLoading, isError } = useProfileLoadingError()

	const { id: myId } = useAppSelector(state => state.auth.userInfo)

	// if no user id in url then returns owner id
	const { id, isOwner } = useUserDetails(myId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		id && dispatch(requestProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError || !id}>
				<div className={s.profile}>
					{isOwner && (
						<div className={s.navigation}>
							<LogoutBtn />
						</div>
					)}
					{id && (
						<>
							<div>
								<ProfileInfo id={id} isOwner={isOwner} />
							</div>
							<div>{!isOwner && <UserProfileBtns userId={id} />}</div>
						</>
					)}
				</div>
			</WithError>
		</WithLoading>
	)
}
