import { Stack } from '@mui/material'
import { memo } from 'react'
import { ChangeThemeBtn } from '@/components/profile/entities/changeThemeBtn'
import { EditBtn } from '@/components/profile/entities/editBtn'
import { FollowProfile } from '../../entities/follow'
import { ProfileSendBtn } from '../../entities/profileSendBtn'

type PropsType = {
	name?: string
	avatar?: string | null
	isOwner: boolean
}

export const UserProfileBtns = memo(({ name, avatar, isOwner }: PropsType) => {
	return (
		<Stack direction={'row'} spacing={2}>
			{isOwner ? (
				<>
					<EditBtn />
					<ChangeThemeBtn />
				</>
			) : (
				<>
					<ProfileSendBtn name={name} avatar={avatar} />
					<FollowProfile />
				</>
			)}
		</Stack>
	)
})
