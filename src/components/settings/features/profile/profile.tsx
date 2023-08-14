import { Stack } from '@mui/material'
import { MainProfileInfo } from '../../entities/mainProfileInfo'
import { Section } from '../../entities/profileSection'
import { SocialLinks } from '../../entities/socialLinks'
import { Title } from '../../entities/title'
import { UpdateProfile } from '../../entities/updateProfileBtn'
import { UpdateErrorMessage } from '../../entities/updateProfileErrorMessage'
import { JobInfo } from '@/components/settings/entities/jobInfo'

export const Profile = () => {
	return (
		<Stack direction={'column'} spacing={3} sx={{ overflowX: 'hidden' }}>
			<UpdateErrorMessage />
			<Title name={'Public Profile'} />
			<MainProfileInfo />
			<Section name={'Social Accounts'}>
				<SocialLinks />
			</Section>
			<JobInfo />
			<UpdateProfile />
			<br />
			<br />
		</Stack>
	)
}
