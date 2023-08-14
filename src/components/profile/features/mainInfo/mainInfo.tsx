import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { useAuthInfo } from '@/components/authorization'
import { useGetProfile, useMainInfo } from '@/components/profile/model/hooks.ts'

export const MainInfo = () => {
	const entities = useMainInfo()
	const { profileData, isOwner } = useGetProfile()
	const { login } = useAuthInfo()

	if (entities && profileData && login) {
		return (
			<Stack spacing={1} sx={{ mb: '20px' }}>
				<UserAvatar
					avatar={profileData.photos.avatar}
					name={profileData.name}
					size={'296px'}
				/>
				<Stack>
					<Typography variant={'h6'} sx={{ fontSize: '25px' }}>
						{profileData.name}
					</Typography>
					{isOwner && (
						<Typography
							variant={'h2'}
							sx={{ fontSize: '20px', color: '#777E89' }}
						>
							{login}
						</Typography>
					)}
				</Stack>
				<Typography variant={'h2'} sx={{ fontSize: '20px' }}>
					{profileData.bio}
				</Typography>
			</Stack>
		)
	}

	return null
}
