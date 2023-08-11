import { GitHub, Menu } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useOutside } from '@/shared/model/hooks.ts'
import { Navigation } from '@/components/navigation'

export const AuthorizedHeader = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleMenuClik = () => setIsShow(!isShow)

	return (
		<Box>
			<Stack
				direction={'row'}
				sx={{ minHeight: '50px', p: '15px 0 10px 40px' }}
				spacing={3}
			>
				<Menu
					sx={{ height: '31px', cursor: 'pointer' }}
					onClick={handleMenuClik}
				/>
				<GitHub sx={{ height: '31px', width: '31px', cursor: 'pointer' }} />
				<Typography sx={{ pt: '4px' }}>Settings</Typography>
			</Stack>
			{isShow && <Navigation setIsShow={setIsShow} navRef={ref} />}
		</Box>
	)
}
