import { ArrowBackRounded } from '@mui/icons-material'
import { Dispatch, SetStateAction } from 'react'
import s from './back.module.css'

export type BackBtnTypes = {
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const BackBtn = ({ setIsShow }: BackBtnTypes) => {
	const handleBtnClick = () => setIsShow(prev => !prev)

	return (
		<div className={s.back} onClick={handleBtnClick}>
			<ArrowBackRounded sx={{ color: '#E6EDF3' }} />
		</div>
	)
}
