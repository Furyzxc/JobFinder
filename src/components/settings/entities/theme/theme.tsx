import { Grid, Stack } from '@mui/material'
import { ReactNode } from 'react'
import { useActions, useTheme } from '@/shared/model/hooks'
import { ThemeType } from '@/components/settings/model'
import { ThemeBody } from '../themeBody'
import { ThemeTitle } from '../themeTitle'

type PropsType = {
	title: string
	titleIcon: ReactNode
	imgSrc: string
	theme: ThemeType
}

export const Theme = ({ titleIcon, title, imgSrc, theme }: PropsType) => {
	const themeName = useTheme()

	const isSelected = themeName === theme

	const borderColor = isSelected ? 'primary.main' : '#2E343B'

	const { setTheme } = useActions()

	const changeTheme = () => setTheme(theme)

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Stack
				onClick={changeTheme}
				sx={{
					border: 'max(1px, 0.0625rem) solid',
					borderColor,
					borderRadius: '5px',
					p: '20px',
				}}
				spacing={2}
			>
				<ThemeTitle isSelected={isSelected} text={title} icon={titleIcon} />
				<ThemeBody imgSrc={imgSrc} />
			</Stack>
		</Grid>
	)
}
