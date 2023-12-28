import { Menu } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import JobFinderLogo from '@/assets/melon.png'
import { HeaderAvatar } from '@/components/header/features/headerAvatar'
import { Navigation } from '@/components/navigation'
import { useOwnerInfo } from '@/components/settings/model'
import { useHeaderPageName } from '../model/hooks.ts'
import { LoginButton } from '../ui/loginButton.tsx'

export const AppHeader = () => {
	const { info } = useOwnerInfo()

	const pageName = useHeaderPageName()

	const { value, setTrue, setFalse } = useBoolean(false)

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
				<Menu sx={{ height: '31px', cursor: 'pointer' }} onClick={setTrue} />
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
			<Navigation open={value} closeNavigation={setFalse} />
		</Box>
	)
}
