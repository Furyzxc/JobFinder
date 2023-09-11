import { Box } from '@mui/material'

type PropsType = {
	imgSrc: string
}

export const ThemeBody = ({ imgSrc }: PropsType) => {
	return (
		<Box sx={{ cursor: 'pointer' }}>
			<img src={imgSrc} alt={'theme view'} />
		</Box>
	)
}
