import { Menu } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import site_icon from '@/assets/melon.png'
import { useOutside } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/avatar'
import { Navigation } from '@/components/navigation'
import { useOwnerInfo } from '@/components/settings/model'
import { useHeaderPageName } from '../model/hooks.ts'

export const AuthorizedHeader = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleMenuClik = useCallback(
		() => setIsShow(!isShow),
		[isShow, setIsShow]
	)

	const navigate = useNavigate()

	const navigateToProfilePage = useCallback(
		() => navigate('/profile'),
		[navigate]
	)

	const { info } = useOwnerInfo()

	const pageName = useHeaderPageName()

	if (info) {
		return (
			<Box>
				<Stack
					alignItems={'center'}
					direction={'row'}
					sx={{
						minHeight: '50px',
						p: '0 0 0 40px',
						bgcolor: '#010409',
					}}
					spacing={3}
				>
					<Menu
						sx={{ height: '31px', cursor: 'pointer' }}
						onClick={handleMenuClik}
					/>
					<Avatar
						src={site_icon}
						alt='user avatar'
						sx={{ height: '31px', width: '31px' }}
					/>
					<Typography sx={{ width: '85%' }}>{pageName}</Typography>
					<span onClick={navigateToProfilePage} style={{ cursor: 'pointer' }}>
						<UserAvatar avatar={info.photos.avatar} name={info.name} />
					</span>
				</Stack>
				{isShow && <Navigation setIsShow={setIsShow} navRef={ref} />}
			</Box>
		)
	}
}
