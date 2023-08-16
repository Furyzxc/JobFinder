import { ArrowBackRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import s from './back.module.css'

export const BackBtn = () => {
	const navigate = useNavigate()

	const handleBtnClick = () => navigate('/dialogs')

	return (
		<div className={s.back} onClick={handleBtnClick}>
			<ArrowBackRounded sx={{ color: '#E6EDF3' }} />
		</div>
	)
}
