import { Box } from '@mui/material'

type PropsType = {
	imgSrc: string
}

export const ThemeBody = ({ imgSrc }: PropsType) => {
	return (
		<Box>
			<img src={imgSrc} alt={'theme view'} style={{ margin: '0 auto' }} />
		</Box>
	)
}
