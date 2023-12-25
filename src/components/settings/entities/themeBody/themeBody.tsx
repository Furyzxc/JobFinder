import { Box } from '@mui/material'
import { useImageOnLoad } from 'usehooks-ts'
import { ThemeType } from '../../model'

type PropsType = {
	imgSrc: string
	theme: ThemeType
}

export const ThemeBody = ({ imgSrc, theme }: PropsType) => {
	const { handleImageOnLoad, css } = useImageOnLoad()
	return (
		<Box>
			<img
				src={imgSrc}
				alt={theme + ' theme'}
				style={{ margin: '0 auto', ...css.fullSize }}
				onLoad={handleImageOnLoad}
			/>
		</Box>
	)
}
