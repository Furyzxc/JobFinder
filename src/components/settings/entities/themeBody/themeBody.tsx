import { Box } from '@mui/material'
import { ThemeType } from '../../model'

type PropsType = {
	imgSrc: string
	theme: ThemeType
}

export const ThemeBody = ({ imgSrc, theme }: PropsType) => {
	return (
		<Box>
			<img src={imgSrc} alt={theme + ' theme'} style={{ margin: '0 auto' }} />
		</Box>
	)
}
