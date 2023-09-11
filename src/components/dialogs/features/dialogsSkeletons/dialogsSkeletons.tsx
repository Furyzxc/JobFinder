import { Skeleton, Stack } from '@mui/material'
import { AvatarSkeleton } from '@/shared/ui/avatarSkeleton'

type PropsType = {
	width: string
}

const SkeletonGroup = ({ width }: PropsType) => {
	return (
		<Stack
			direction={'row'}
			sx={{ height: '56px', alignItems: 'center' }}
			spacing={2}
		>
			<AvatarSkeleton />
			<Skeleton width={width} height={'20px'} />
		</Stack>
	)
}

export const DialogsSkeletons = () => {
	return (
		<>
			<SkeletonGroup width={'120px'} />
			<SkeletonGroup width={'150px'} />
			<SkeletonGroup width={'80px'} />
			<SkeletonGroup width={'200px'} />
			<SkeletonGroup width={'100px'} />
			<SkeletonGroup width={'120px'} />
			<SkeletonGroup width={'70px'} />
			<SkeletonGroup width={'50px'} />
			<SkeletonGroup width={'100px'} />
			<SkeletonGroup width={'170px'} />
		</>
	)
}
