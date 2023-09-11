import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { BackBtn } from '../backBtn'

type PropsType = {
	dialogName: string
	avatar?: string | null
}

export const ChatHeader = ({ dialogName, avatar }: PropsType) => {
	return (
		<Stack
			alignItems={'center'}
			direction={'row'}
			sx={{ bgColor: 'primary.light', pl: '10px', height: '100%', zIndex: 3 }}
			spacing={2}
		>
			<BackBtn />
			<UserAvatar avatar={avatar} name={dialogName} />
			<Typography className={'notranslate'} variant={'h5'}>
				{dialogName}
			</Typography>
		</Stack>
	)
}
