import { Stack } from '@mui/material'
import { ReactNode } from 'react'
import { useTheme } from '@/shared/model/hooks'
import { ThemeBody } from '../themeBody'
import { ThemeTitle } from '../themeTitle'

type PropsType = {
	title: string
	titleIcon: ReactNode
	imgSrc: string
	theme: 'dark' | 'light'
}

export const Theme = ({ titleIcon, title, imgSrc, theme }: PropsType) => {
	const themeName = useTheme()

	const isSelected = themeName === theme

	const borderColor = isSelected ? 'primary.main' : '#2E343B'

	return (
		<Stack
			sx={{
				border: 'max(1px, 0.0625rem) solid',
				borderColor,
				borderRadius: '5px',
				p: '20px',
			}}
			spacing={2}
		>
			<ThemeTitle isSelected={isSelected} text={title} icon={titleIcon} />
			<ThemeBody imgSrc={imgSrc} theme={theme} />
		</Stack>
	)
}
