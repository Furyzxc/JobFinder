import { Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { AvatarSkeleton } from '@/shared/ui/avatarSkeleton'
import { ProfileAvatar } from '@/components/profile/entities/profileAvatar'

type PropsType = {
	login: string | null
	isOwner: boolean
	bio?: string | null
	name?: string
	avatar?: string | null
	isLoading: boolean
}

export const MainInfo = ({
	name,
	login,
	bio,
	isOwner,
	avatar,
	isLoading,
}: PropsType) => {
	const { ref } = useSmoothAppearance()
	return (
		<Stack spacing={1} sx={{ mb: '20px', opacity: 0 }} ref={ref}>
			{isLoading ? (
				<AvatarSkeleton size={'296px'} />
			) : isOwner ? (
				<Tooltip title={'Change your avatar'} placement={'bottom-end'}>
					<ProfileAvatar avatar={avatar} name={name || ''} isOwner />
				</Tooltip>
			) : (
				<ProfileAvatar avatar={avatar} name={name || ''} />
			)}
			<Stack className='notranslate'>
				<Typography
					variant={'h6'}
					sx={{ fontSize: '25px', width: 'max-content', minWidth: '100px' }}
					className='notranslate'
				>
					{isLoading ? <Skeleton /> : name}
				</Typography>
				{isOwner && (
					<Typography
						variant={'h2'}
						sx={{
							fontSize: '20px',
							color: '#777E89',
							width: 'max-content',
							minWidth: '90px',
						}}
					>
						{isLoading ? <Skeleton /> : login}
					</Typography>
				)}
			</Stack>
			<Typography variant={'h2'} sx={{ fontSize: '20px' }}>
				{isLoading ? (
					<div>
						<Skeleton /> <Skeleton /> <Skeleton />
					</div>
				) : (
					bio && bio
				)}
			</Typography>
		</Stack>
	)
}
