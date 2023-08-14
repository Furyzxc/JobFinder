import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { useAuthInfo } from '@/components/authorization'
import { useGetProfile, useMainInfo } from '@/components/profile/model/hooks.ts'

type PropsType = {
	isOwner: boolean
}

export const MainInfo = ({ isOwner }: PropsType) => {
	const entities = useMainInfo()
	const { data } = useGetProfile()
	const { login } = useAuthInfo()

	if (entities && data && login) {
		return (
			<Stack spacing={1} sx={{ mb: '20px' }}>
				<UserAvatar
					avatar={data.photos.avatar}
					name={data.name}
					size={'296px'}
				/>
				<Stack>
					<Typography variant={'h6'} sx={{ fontSize: '25px' }}>
						{data.name}
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
					{data.bio}
				</Typography>
			</Stack>
		)
	}

	return null
}
