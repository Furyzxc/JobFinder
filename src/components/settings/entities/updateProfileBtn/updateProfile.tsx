import { Button } from '@mui/material'
import { memo } from 'react'
import { useProfileUpdate } from '../../model/hooks'

export const UpdateProfile = memo(() => {
	// trigger that sends ajax request that changes profile data
	const [updateProfile, { isLoading }] = useProfileUpdate()

	return (
		<Button
			variant={'contained'}
			sx={{
				background: '#238636',
				maxWidth: '130px',
				'&:hover': { bgcolor: 'success.dark' },
				'&:focus': { bgcolor: 'success.dark' },
			}}
			size={'small'}
			disabled={isLoading}
			onClick={updateProfile}
		>
			Update profile
		</Button>
	)
})
