import {
	BedtimeOutlined,
	GrassOutlined,
	LightModeOutlined,
} from '@mui/icons-material'
import { Grid, Stack } from '@mui/material'
import darkTheme from '@/assets/darkTheme.svg'
import lightTheme from '@/assets/lightTheme.svg'
import spotifyTheme from '@/assets/spotifyTheme.svg'
import { Theme } from '../../entities/theme'
import { Title } from '../../entities/title'

export const Appearance = () => {
	return (
		<Stack>
			<Title name={'Theme preferences'} />
			<Grid
				container
				sx={{ display: 'flex', pt: '20px' }}
				direction={'row'}
				spacing={2}
			>
				<Theme
					title={'Day theme'}
					titleIcon={<LightModeOutlined />}
					imgSrc={lightTheme}
					theme={'light'}
				/>
				<Theme
					title={'Night theme'}
					titleIcon={<BedtimeOutlined />}
					imgSrc={darkTheme}
					theme={'dark'}
				/>
				<Theme
					title={'Spotify theme'}
					titleIcon={<GrassOutlined />}
					imgSrc={spotifyTheme}
					theme={'spotify'}
				/>
			</Grid>
		</Stack>
	)
}
