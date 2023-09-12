import { Skeleton, Stack } from '@mui/material'

type PropsType = {
	width: string
}

const RightSkeleton = ({ width }: PropsType) => (
	<Skeleton sx={{ alignSelf: 'flex-end', width, height: '30px' }} />
)

const LeftSkeleton = ({ width }: PropsType) => (
	<Skeleton sx={{ width, height: '30px' }} />
)

const RightGroup = () => (
	<>
		<RightSkeleton width={'150px'} />
		<RightSkeleton width={'230px'} />
		<RightSkeleton width={'100px'} />
	</>
)
const LeftGroup = () => (
	<>
		<LeftSkeleton width={'200px'} />
		<LeftSkeleton width={'150px'} />
		<LeftSkeleton width={'230px'} />
		<LeftSkeleton width={'100px'} />
	</>
)

export const MessagesSkeletons = () => {
	return (
		<Stack sx={{ p: '10px' }} spacing={1}>
			<RightGroup />
			<LeftGroup />
			<RightSkeleton width={'200px'} />
			<RightGroup />
		</Stack>
	)
}
