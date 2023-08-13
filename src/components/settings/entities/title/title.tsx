import { Typography } from '@mui/material'
import s from './title.module.css'

type PropsType = {
	name: string
}

export const Title = ({ name }: PropsType) => {
	return (
		<Typography variant={'h6'} className={s.title} sx={{ fontSize: '25px' }}>
			{name}
		</Typography>
	)
}
