import { Grid, Stack } from '@mui/material'
import { ReactNode, memo, useCallback, useEffect } from 'react'
import { useActions, useHover } from '@/shared/model/hooks'
import { ThemeType } from '@/components/settings/model'
import { useTheme } from '@/components/settings/model/hooks'
import { ThemeBody } from '../themeBody'
import { ThemeTitle } from '../themeTitle'

type PropsType = {
	title: string
	titleIcon: ReactNode
	imgSrc: string
	theme: ThemeType
}

export const Theme = memo(({ titleIcon, title, imgSrc, theme }: PropsType) => {
	const { setTheme, setPreviewTheme } = useActions()
	const { choosenTheme } = useTheme()
	const { isHovered, ref } = useHover()

	const isSelected = choosenTheme === theme

	const borderColor = isSelected ? 'primary.main' : '#2E343B'

	const changeTheme = useCallback(() => setTheme(theme), [setTheme, theme])

	useEffect(() => {
		if (isHovered) {
			setPreviewTheme(theme)
		} // if theme is not hovered clearing preview theme
		else {
			setPreviewTheme(null)
		}
	}, [isHovered, setPreviewTheme, theme])

	return (
		<Grid item xs={12} sm={6} md={4} ref={ref}>
			<Stack
				onClick={changeTheme}
				sx={{
					border: 'max(1px, 0.0625rem) solid',
					borderColor,
					borderRadius: '5px',
					p: '20px',
				}}
				spacing={4}
			>
				<ThemeTitle isSelected={isSelected} text={title} icon={titleIcon} />
				<ThemeBody theme={theme} imgSrc={imgSrc} />
			</Stack>
		</Grid>
	)
})
