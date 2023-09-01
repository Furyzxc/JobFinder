import { Skeleton, Stack } from '@mui/material'

export const DialogsListSkeletons = () => {
	const skeletonCount = 8 // Number of skeletons you want to create
	const skeletons = Array.from({ length: skeletonCount }, () => (
		<Skeleton
			key={Math.random()}
			width={'100%'}
			height={54}
			animation={'wave'}
		/>
	))
	return <Stack spacing={1}>{skeletons}</Stack>
}
