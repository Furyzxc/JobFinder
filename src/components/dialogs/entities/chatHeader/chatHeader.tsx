import { Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { BackBtn } from '../backBtn'
import { useGetProfile } from '@/components/profile'

export const ChatHeader = () => {
	const { profileData } = useGetProfile()

	const dialogName = profileData?.name
	const avatar = profileData?.photos.avatar

	// check if name and avatar is not undefined
	if (dialogName && avatar !== undefined) {
		return (
			<Stack
				alignItems={'center'}
				direction={'row'}
				sx={{ bgColor: '#161B22', pl: '10px', height: '100%', zIndex: 3 }}
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
}
