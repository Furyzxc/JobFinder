import { Button } from '@mui/material';
import { useProfileUpdate } from '@/components/settings/model/hooks/useProfileUpdate.ts'


export const UpdateProfile = () => {
	// trigger that sends ajax request that changes profile data
	const [updateProfile] = useProfileUpdate()
	const handleUpdateBtnClick = () => updateProfile()
	
	return (
		<Button
			variant={'contained'}
			sx={{ background: '#238636', maxWidth: '130px' }}
			size={'small'}
			onClick={handleUpdateBtnClick}
		>
			Update profile
		</Button>
	)
}