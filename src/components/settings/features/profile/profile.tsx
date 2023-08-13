import { Grid, Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { BioAndName } from '../../entities/bioAndName'
import { Section } from '../../entities/profileSection'
import { SocialLinks } from '../../entities/socialLinks'
import { Title } from '../../entities/title'
import { UpdateProfile } from '../../entities/updateProfileBtn'
import { UpdateErrorMessage } from '../../entities/updateProfileErrorMessage'
import { useOwnerInfo } from '../../model/hooks'

export const Profile = () => {
	const { info } = useOwnerInfo()

	const name = info?.name
	const avatar = info?.photos.avatar

	return (
		<Stack direction={'column'} spacing={2} sx={{ overflowX: 'hidden' }}>
			<UpdateErrorMessage />
			<Title name={'Public Profile'} />
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
	)
}
