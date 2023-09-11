import { Stack } from '@mui/material'
import { memo, useEffect } from 'react'
import { useActions, useSmoothAppearance } from '@/shared/model/hooks'
import { useOwnerInfo, useProfileSettings } from '../../model/hooks'
import { JobInfo } from '../../entities/jobInfo'
import { MainProfileInfo } from '../../entities/mainProfileInfo'
import { SocialAccountsInfo } from '../../entities/socialAccountsInfo'
import { Title } from '../../entities/title'
import { UpdateProfile } from '../../entities/updateProfileBtn'
import { UpdateErrorMessage } from '../../entities/updateProfileErrorMessage'

export const Profile = memo(() => {
	const { ref } = useSmoothAppearance()
	const { info } = useOwnerInfo()
	const { setProfileInfo } = useActions()

	useEffect(() => {
		// Setting initial values to state
		if (info) setProfileInfo(info)
	}, [info, setProfileInfo])

	const {
		name,
		bio,
		lookingForAJob,
		lookingForAJobDescription,
		photos: { avatar },
		socialAccounts,
		updateProfileErrorMessage: error,
	} = useProfileSettings()

	return (
		<Stack
			direction={'column'}
			spacing={3}
			sx={{ overflowX: 'hidden' }}
			ref={ref}
		>
			{name && (
				<>
					{error && <UpdateErrorMessage error={error} />}
					<Title name={'Public Profile'} />
					<MainProfileInfo name={name} bio={bio || ''} avatar={avatar} />
					<SocialAccountsInfo {...socialAccounts} />
					<JobInfo
						lookingForAJob={lookingForAJob}
						lookingForAJobDescription={lookingForAJobDescription || ''}
					/>
					<UpdateProfile />
					<br />
					<br />
				</>
			)}
		</Stack>
	)
})

export default Profile
