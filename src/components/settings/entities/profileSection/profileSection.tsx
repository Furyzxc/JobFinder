import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface Section {
	name: string
	description?: string
	children: ReactNode
}

export const Section = ({ name, description, children }: Section) => {
	return (
		<Stack spacing={1}>
			<Typography variant={'h6'} sx={{ fontSize: '14px' }}>
				{name}
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
