import { Stack } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { JobInfo } from '../../entities/jobInfo'
import { MainProfileInfo } from '../../entities/mainProfileInfo'
import { SocialLinks } from '../../entities/socialLinks'
import { Title } from '../../entities/title'
import { UpdateProfile } from '../../entities/updateProfileBtn'
import { UpdateErrorMessage } from '../../entities/updateProfileErrorMessage'


export const Profile = () => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack
			direction={'column'}
			spacing={3}
			sx={{ overflowX: 'hidden' }}
			ref={ref}
		>
			<UpdateErrorMessage />
			<Title name={'Public Profile'} />
			<MainProfileInfo />
			<SocialLinks />
			<JobInfo />
			<UpdateProfile />
			<br />
			<br />
		</Stack>
	)
}