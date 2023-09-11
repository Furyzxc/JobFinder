import { Skeleton, Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { AvatarSkeleton } from '@/shared/ui/avatarSkeleton'
import { BackBtn } from '../backBtn'

type PropsType = {
	dialogName?: string
	avatar?: string | null
	isLoading: boolean
}

export const ChatHeader = ({ dialogName, avatar, isLoading }: PropsType) => {
	return (
		<Stack
			alignItems={'center'}
			direction={'row'}
			sx={{ bgColor: 'primary.light', pl: '10px', height: '100%', zIndex: 3 }}
			spacing={2}
		>
			<BackBtn />
			{isLoading ? (
				<AvatarSkeleton />
			) : (
				<UserAvatar avatar={avatar} name={dialogName || '?'} />
			)}
			<Typography
				className={'notranslate'}
				sx={{ width: 'max-content', minWidth: '80px' }}
				variant={'h5'}
			>
				{isLoading ? <Skeleton /> : dialogName}
			</Typography>
		</Stack>
	)
}
