import { Stack, Typography } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/avatar'

type PropsType = {
	login: string | null
	isOwner: boolean
	bio: string | null
	name: string
	avatar: string | null
}

export const MainInfo = ({ name, login, bio, isOwner, avatar }: PropsType) => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack spacing={1} sx={{ mb: '20px', opacity: 0 }} ref={ref}>
			<UserAvatar
				avatar={avatar}
				name={name}
				size={'296px'}
				fontSize={'25px'}
			/>
			<Stack className='notranslate'>
				<Typography
					variant={'h6'}
					sx={{ fontSize: '25px' }}
					className='notranslate'
				>
					{name}
				</Typography>
				{isOwner && (
					<Typography
						variant={'h2'}
						sx={{ fontSize: '20px', color: '#777E89' }}
					>
						{login}
					</Typography>
				)}
			</Stack>
			{bio && (
				<Typography variant={'h2'} sx={{ fontSize: '20px' }}>
					{bio}
				</Typography>
			)}
		</Stack>
	)
}
