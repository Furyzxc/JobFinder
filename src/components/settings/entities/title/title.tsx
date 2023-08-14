import { Typography } from '@mui/material'
import { memo } from 'react'
import s from './title.module.css'

type PropsType = {
	name: string
}

export const Title = memo(({ name }: PropsType) => {
	return (
		<Typography variant={'h6'} className={s.title} sx={{ fontSize: '25px' }}>
			{name}
		</Typography>
	)
})
