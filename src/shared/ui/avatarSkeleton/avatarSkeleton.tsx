import { Skeleton } from '@mui/material'

type PropsType = {
	size?: string
}

export const AvatarSkeleton = ({ size }: PropsType) => {
	return (
		<Skeleton
			variant={'circular'}
			width={size || '40px'}
			height={size || '40px'}
		/>
	)
}
