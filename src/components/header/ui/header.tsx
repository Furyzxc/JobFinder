import { Menu } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import site_icon from '@/assets/melon.png'
import { useOutside } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/avatar'
import { Navigation } from '@/components/navigation'
import { useOwnerInfo } from '@/components/settings/model'
import { useHeaderPageName } from '../model/hooks.ts'

export const AuthorizedHeader = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleMenuClik = () => setIsShow(!isShow)

	const { info } = useOwnerInfo()

	const name = info?.name
	const avatar = info?.photos.avatar

	const pageName = useHeaderPageName()
	return (
		<Box>
			<Stack
				direction={'row'}
				sx={{
					minHeight: '50px',
					p: '10px 0 0 40px',
					backgroundColor: '#010409',
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
				<Typography sx={{ pt: '4px', width: '85%' }}>{pageName}</Typography>
				<Link to={'/profile'} style={{ marginTop: '-5px', cursor: 'pointer' }}>
					{name && <UserAvatar avatar={avatar} name={name} />}
				</Link>
			</Stack>
			{isShow && <Navigation setIsShow={setIsShow} navRef={ref} />}
		</Box>
	)
}
