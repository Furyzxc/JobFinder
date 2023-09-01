import { Stack } from '@mui/material'
import { memo } from 'react'
import { Follow } from '../../entities/follow'
import { ProfileSendBtn } from '../../entities/profileSendBtn'

type PropsType = {
	name: string
	avatar: string | null
}

export const UserProfileBtns = memo(({ name, avatar }: PropsType) => {
	return (
		<Stack direction={'row'} spacing={2}>
			<ProfileSendBtn name={name} avatar={avatar} />
			<Follow />
		</Stack>
	)
})
