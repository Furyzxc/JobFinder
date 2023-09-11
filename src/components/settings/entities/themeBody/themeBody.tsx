import { Box } from '@mui/material'
import { useActions } from '@/shared/model/hooks'

type PropsType = {
	imgSrc: string
	theme: 'light' | 'dark'
}

export const ThemeBody = ({ imgSrc, theme }: PropsType) => {
	const { setTheme } = useActions()

	const changeTheme = () => setTheme(theme)

	return (
		<Box sx={{ cursor: 'pointer' }} onClick={changeTheme}>
			<img src={imgSrc} alt={'theme'} />
		</Box>
	)
}
