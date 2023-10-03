import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface Section {
	name: string
	description?: string
	children: ReactNode
	paragraphFont?: string // fontsize
	paragraphColor?: string // typography color
	paragraphPL?: string // padding left
}

export const Section = ({
	name,
	description,
	children,
	paragraphFont,
	paragraphColor,
	paragraphPL,
}: Section) => {
	return (
		<Stack spacing={1}>
			<Typography
				variant={'h6'}
				sx={{
					fontSize: paragraphFont || '14px',
					color: paragraphColor,
					pl: paragraphPL,
				}}
			>
				<label htmlFor={name}>{name}</label>
			</Typography>
			{children}
			{description && (
				<Typography sx={{ fontSize: '12px', color: '#7D8590' }}>
					{description}
				</Typography>
			)}
		</Stack>
	)
}
