import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	text: string
	icon: ReactNode
	isSelected: boolean
}

export const ThemeTitle = ({ text, icon, isSelected }: PropsType) => {
	return (
		<Stack direction={'row'} position={'relative'}>
			{icon}
			<Typography flexGrow={1} pl={'10px'}>
				{text}
			</Typography>
			{isSelected && (
				<Typography
					sx={{
						position: 'absolute',
						right: '0',
						top: '0',
						fontSize: '12px',
						border: '1px solid',
						borderColor: 'primary',
						p: '2px 8px',
						borderRadius: '10px',
						userSelect: 'none',
					}}
					color={'primary'}
				>
					Active
				</Typography>
			)}
		</Stack>
	)
}
