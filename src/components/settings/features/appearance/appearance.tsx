import { BedtimeOutlined, LightModeOutlined } from '@mui/icons-material'
import { Stack } from '@mui/material'
import nightTheme from '@/assets/darkThemeImg.png'
import dayTheme from '@/assets/lightThemeImg.png'
import { Theme } from '@/components/settings/entities/theme'
import { Title } from '../../entities/title'

export const Appearance = () => {
	return (
		<Stack>
			<Title name={'Theme preferences'} />
			<Stack sx={{ display: 'flex', pt: '20px' }} direction={'row'} spacing={2}>
				<Theme
					title={'Day theme'}
					titleIcon={<LightModeOutlined />}
					imgSrc={dayTheme}
					theme={'light'}
				/>
				<Theme
					title={'Night theme'}
					titleIcon={<BedtimeOutlined />}
					imgSrc={nightTheme}
					theme={'dark'}
				/>
			</Stack>
		</Stack>
	)
}
