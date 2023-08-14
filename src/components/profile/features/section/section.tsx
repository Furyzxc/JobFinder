import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	name: string
	children: ReactNode
}

export const Section = ({ name, children }: PropsType) => {
	return (
		<Stack spacing={1}>
			<Typography>{name}</Typography>
			{children}
		</Stack>
	)
}
