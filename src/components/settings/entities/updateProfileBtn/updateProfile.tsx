import { Button } from '@mui/material'
import { memo } from 'react'
import { useProfileUpdate } from '../../model/hooks'

export const UpdateProfile = memo(() => {
	// trigger that sends ajax request that changes profile data
	const [updateProfile, { isLoading }] = useProfileUpdate()

	const handleUpdateBtnClick = () => updateProfile()

	return (
		<Button
			variant={'contained'}
			sx={{
				background: '#238636',
				maxWidth: '130px',
				'&:hover': { bgcolor: 'primary.main' },
				'&:focus': {
					bgcolor: '#238636',
					'&:hover': { bgcolor: '#1f57a9' },
				},
			}}
			size={'small'}
			disabled={isLoading}
			onClick={handleUpdateBtnClick}
		>
			Update profile
		</Button>
	)
})
