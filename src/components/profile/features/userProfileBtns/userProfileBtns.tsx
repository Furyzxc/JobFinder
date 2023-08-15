import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Follow } from '../../entities/follow'
import { ProfileSendBtn } from '../../entities/profileSendBtn'

export const UserProfileBtns = () => {
	const { userId } = useParams()

	if (userId) {
		return (
			<Stack direction={'row'} spacing={2}>
				<ProfileSendBtn userId={+userId} />
				<Follow />
			</Stack>
		)
	}
}
