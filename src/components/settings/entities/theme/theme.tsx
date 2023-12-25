import { Grid, Stack } from '@mui/material'
import { ReactNode, memo, useCallback } from 'react'
import { useActions } from '@/shared/model/hooks'
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
	const { setTheme } = useActions()
	const { chosenTheme } = useTheme()

	const isSelected = chosenTheme === theme

	const borderColor = isSelected ? 'primary.main' : '#2E343B'

	const changeTheme = useCallback(() => setTheme(theme), [setTheme, theme])

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
				spacing={4}
			>
				<ThemeTitle isSelected={isSelected} text={title} icon={titleIcon} />
				<ThemeBody theme={theme} imgSrc={imgSrc} />
			</Stack>
		</Grid>
	)
})
