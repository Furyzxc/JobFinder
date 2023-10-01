import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { useAuthInfo } from '@/components/authorization'
import { useOwnerInfo } from '../../model/hooks'

export const Header = () => {
	const { login } = useAuthInfo()

	const { info } = useOwnerInfo()

	if (info)
		return (
			<Stack direction={'row'} spacing={1}>
				<UserAvatar
					avatar={info.photos.avatar}
					name={info.name}
					size={'48px'}
					fontSize={'18px'}
				/>
				<Stack>
					<Stack direction={'row'} spacing={1} className='notranslate'>
						<Typography
							noWrap
							variant={'h6'}
							sx={{ color: 'secondary', fontSize: '18px' }}
						>
							{info.name}
						</Typography>
						<Typography
							noWrap
							variant={'h6'}
							sx={{ color: '#768590', pt: '1px' }}
						>
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
