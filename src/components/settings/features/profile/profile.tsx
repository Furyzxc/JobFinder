import { Grid, Stack, Typography } from '@mui/material'
import { WithError, WithLoading } from '@/shared/hoc'
import { UserAvatar } from '@/shared/ui/avatar'
import { useOwnerInfo } from '../../model/hooks'
import s from './style.module.css'
import { useEditProfileInfoMutation } from '@/components/settings/api/api.ts'
import { BioAndName } from '@/components/settings/entities/bioAndName/bioAndName.tsx'
import { Section } from '@/components/settings/entities/profileSection/profileSection.tsx'
import { SocialLinks } from '@/components/settings/entities/socialLinks'
import { UpdateProfile } from '@/components/settings/entities/updateProfileBtn/updateProfile.tsx'

export const Profile = () => {
	const { info } = useOwnerInfo()

	const name = info?.name
	const avatar = info?.photos.avatar

	const [, { data, isError, isLoading }] = useEditProfileInfoMutation()

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError}>
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
					<UpdateProfile />
					<br />
					<br />
				</Stack>
			</WithError>
		</WithLoading>
	)
}
