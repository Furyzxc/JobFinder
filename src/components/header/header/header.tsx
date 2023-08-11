import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import s from './sign.module.css'

export const Header = () => {
	return (
		<Button
			variant='outlined'
			sx={{ position: 'absolute', top: '0', right: '5%' }}
		>
			<Link to='/login' className={s.link}>
				Sign in
			</Link>
		</Button>
	)
}
