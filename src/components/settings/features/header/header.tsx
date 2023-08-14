import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { useOwnerInfo } from '../../model/hooks'
import { useAuthInfo } from '@/components/authorization'
import { ProfileResponseBody } from '@/components/profile'

export const Header = () => {
	const { login } = useAuthInfo()

	const { info } = useOwnerInfo()

	const {
		name,
		photos: { avatar },
	} = info as ProfileResponseBody

	if (name) {
		return (
			<Stack direction={'row'} spacing={1}>
				<UserAvatar avatar={avatar} name={name} size={'48px'} />
				<Stack direction={'column'}>
					<Stack direction={'row'} spacing={1}>
						<Typography
							variant={'h6'}
							sx={{ color: 'white', fontSize: '18px' }}
						>
							{name}
						</Typography>
						<Typography variant={'h6'} sx={{ color: '#768590', pt: '1px' }}>
							({login})
						</Typography>
					</Stack>
					<Typography
						variant={'h1'}
						sx={{ color: '#7D8590', fontSize: '12px' }}
					>
						Your personal account
					</Typography>
				</Stack>
			</Stack>
		)
	}

	return null
}
