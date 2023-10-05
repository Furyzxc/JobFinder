import { Skeleton, Stack, Typography } from '@mui/material'
import { AvatarSkeleton } from '@/shared/ui/avatarSkeleton'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { useChatSlice } from '@/components/dialogs/model/hooks'
import { BackBtn } from '../backBtn'

type PropsType = {
	isLoading: boolean
}

export const ChatHeader = ({ isLoading }: PropsType) => {
	const {
		profile: { name: dialogName, avatar },
	} = useChatSlice()

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
