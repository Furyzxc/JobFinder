import { Menu } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import JobFinderLogo from '@/assets/melon.png'
import { useMuiDialog } from '@/shared/model/hooks'
import { Navigation } from '@/components/navigation'
import { useOwnerInfo } from '@/components/settings/model'
import { useHeaderPageName } from '../model/hooks.ts'
import { HeaderAvatar } from './headerAvatar.tsx'
import { LoginButton } from './loginButton.tsx'

export const AppHeader = () => {
	const { info } = useOwnerInfo()

	const pageName = useHeaderPageName()

	const { open, setOpen, onClose } = useMuiDialog(false)

	const showNavigation = () => setOpen(true)

	return (
		<Box>
			<Stack
				alignItems={'center'}
				direction={'row'}
				sx={{
					minHeight: '50px',
					p: '0 0 0 40px',
					bgcolor: 'primary.dark',
				}}
				spacing={3}
			>
				<Menu
					sx={{ height: '31px', cursor: 'pointer' }}
					onClick={showNavigation}
				/>
				<Avatar
					src={JobFinderLogo}
					alt='JobFinder Logo'
					sx={{ height: '31px', width: '31px' }}
				/>
				<Typography sx={{ width: '85%' }}>{pageName}</Typography>
				{info ? (
					<HeaderAvatar avatar={info.photos.avatar} name={info.name} />
				) : (
					<LoginButton />
				)}
			</Stack>
			<Navigation open={open} closeNavigation={onClose} />
		</Box>
	)
}
