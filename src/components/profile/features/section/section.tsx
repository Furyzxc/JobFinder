import { Skeleton, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	name: string
	children: ReactNode
	isLoading?: boolean
}

export const Section = ({ name, children, isLoading }: PropsType) => {
	return (
		<Stack spacing={1}>
			<Typography>{isLoading ? <Skeleton width={'150px'} /> : name}</Typography>
			{isLoading ? <Skeleton height={'40px'} /> : children}
		</Stack>
	)
}
