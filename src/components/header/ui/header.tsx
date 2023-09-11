import { Menu } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'
import site_icon from '@/assets/melon.png'
import { useOutside } from '@/shared/model/hooks'
import { Navigation } from '@/components/navigation'
import { useOwnerInfo } from '@/components/settings/model'
import { useHeaderPageName } from '../model/hooks.ts'
import { HeaderAvatar } from './headerAvatar.tsx'
import { LoginButton } from './loginButton.tsx'

export const AppHeader = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleMenuClik = useCallback(
		() => setIsShow(!isShow),
		[isShow, setIsShow]
	)

	const { info } = useOwnerInfo()

	const pageName = useHeaderPageName()

	return (
		<Box>
			<Stack
				alignItems={'center'}
				direction={'row'}
				sx={{
					minHeight: '50px',
					p: '0 0 0 40px',
					bgcolor: 'secondary.dark',
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
				{info ? (
					<HeaderAvatar avatar={info.photos.avatar} name={info.name} />
				) : (
					<LoginButton />
				)}
			</Stack>
			{isShow && <Navigation setIsShow={setIsShow} navRef={ref} />}
		</Box>
	)
}
