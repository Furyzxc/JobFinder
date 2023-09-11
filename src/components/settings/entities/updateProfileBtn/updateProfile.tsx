import { Button } from '@mui/material'
import { memo } from 'react'
import { useProfileUpdate } from '../../model/hooks'
import s from './btn.module.css'

export const UpdateProfile = memo(() => {
	// trigger that sends ajax request that changes profile data
	const [updateProfile, { isLoading }] = useProfileUpdate()

	const handleUpdateBtnClick = () => updateProfile()

	return (
		<Button
			className={s.btn}
			variant={'contained'}
			sx={{ background: '#238636', maxWidth: '130px' }}
			size={'small'}
			disabled={isLoading}
			onClick={handleUpdateBtnClick}
		>
			Update profile
		</Button>
	)
})
