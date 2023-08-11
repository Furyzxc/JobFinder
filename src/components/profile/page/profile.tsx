import { Container } from '@mui/material'
import { useEffect } from 'react'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppDispatch, useUserDetails } from '@/shared/model/hooks.ts'
import { ProfileInfo } from '../features/profileInfo'
import { UserProfileBtns } from '../features/userProfileBtns'
import { useProfile } from '../model/hooks.ts'
import { requestProfileDataThunk } from '../model/slice.ts'
import { useAuthInfo } from '@/components/authorization'

export const Profile = () => {
	const { isLoading, isError } = useProfile()

	const { id: myId } = useAuthInfo()

	// if no user id in url then returns owner id
	const { id, isOwner } = useUserDetails(myId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		id && dispatch(requestProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError || !id}>
				<Container>
					{id && (
						<>
							<div>
								<ProfileInfo id={id} />
							</div>
							<div>{!isOwner && <UserProfileBtns userId={id} />}</div>
						</>
					)}
				</Container>
			</WithError>
		</WithLoading>
	)
}
