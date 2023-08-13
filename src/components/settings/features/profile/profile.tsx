import { Button, Grid, Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { useOwnerInfo } from '../../model/hooks'
import s from './style.module.css'
import { BioAndName } from '@/components/settings/entities/bioAndName/bioAndName.tsx'
import { Section } from '@/components/settings/entities/profileSection/profileSection.tsx'
import { SocialLinks } from '@/components/settings/entities/socialLinks'
import { useProfileUpdate } from '@/components/settings/model/hooks/useProfileUpdate.ts'

export const Profile = () => {
	const { info } = useOwnerInfo()

	const name = info?.name
	const avatar = info?.photos.avatar

	// trigger that sends ajax request that changes profile data
	const [updateProfile] = useProfileUpdate()
	const handleUpdateBtnClick = () => updateProfile()

	return (
		<Stack direction={'column'} spacing={2} sx={{ overflowX: 'hidden' }}>
			<div>
				<Typography
					variant={'h6'}
					className={s.title}
					sx={{ fontSize: '25px' }}
				>
					Public Profile
				</Typography>
			</div>
			<Grid container wrap={'wrap-reverse'} spacing={2}>
				<Grid item xs={12} sm={7}>
					<BioAndName />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Stack>
						<Typography>Public picture</Typography>
						<UserAvatar avatar={avatar} name={name || ''} size={'150px'} />
					</Stack>
				</Grid>
			</Grid>
			<Section name={'Social Accounts'}>
				<SocialLinks />
			</Section>
			<Button
				variant={'contained'}
				sx={{ background: '#238636', maxWidth: '130px' }}
				size={'small'}
				onClick={handleUpdateBtnClick}
			>
				Update profile
			</Button>
			<br />
			<br />
		</Stack>
	)
}
