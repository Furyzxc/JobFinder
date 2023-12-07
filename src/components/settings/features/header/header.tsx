import { Box, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { navigationTabValues } from '@/shared/constants'
import { useActions } from '@/shared/model/hooks'
import { ContainedButton } from '@/shared/ui/containedButton'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { useAuthInfo } from '@/components/authorization'
import { useOwnerInfo } from '../../model/hooks'
import s from './header.module.css'

const { PROFILE } = navigationTabValues

export const Header = () => {
	const navigate = useNavigate()
	const { setNavigationTab } = useActions()

	const goToProfile = () => {
		navigate('/profile')
		setNavigationTab(PROFILE)
	}

	const { login } = useAuthInfo()

	const { info } = useOwnerInfo()

	if (info) {
		return (
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<Stack
					direction={'row'}
					spacing={1}
					sx={{ flexGrow: 1, minWidth: '677px' }}
				>
					<UserAvatar
						avatar={info.photos.avatar}
						name={info.name}
						size={'48px'}
						fontSize={'18px'}
					/>
					<Stack>
						<Link to={'/profile'} className={s.link}>
							<Typography
								noWrap
								variant={'h6'}
								sx={{
									'&:hover': {
										textDecoration: 'underline',
										textDecorationColor: 'secondary.light',
									},
									color: 'secondary.light',
									fontSize: '20px',
								}}
								className={'notranslate'}
							>
								{info.name} <span style={{ color: '#768590' }}>({login})</span>
							</Typography>
						</Link>
						<Typography
							variant={'h1'}
							sx={{ color: '#7D8590', fontSize: '12px' }}
						>
							Your personal account
						</Typography>
					</Stack>
				</Stack>
				<div style={{ paddingTop: '10px' }}>
					<ContainedButton onClick={goToProfile}>
						Go to your personal profile
					</ContainedButton>
				</div>
			</Box>
		)
	}
}
