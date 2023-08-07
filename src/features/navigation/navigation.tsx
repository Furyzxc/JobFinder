import MailOutlineIcon from '@mui/icons-material/MailOutline'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { Link } from 'react-router-dom'
import s from './navigation.module.css'

function HomeIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
		</SvgIcon>
	)
}

export const Navigation = () => {
	return (
		<Box className={s.box} sx={{ pl: '10px', height: '70vh' }}>
			<Link to='/profile'>
				<HomeIcon />
			</Link>

			<Link to='/dialogs'>
				<MailOutlineIcon />
			</Link>

			<Link to='/news'>
				<NewspaperIcon />
			</Link>

			<Link to='/music'>
				<MusicNoteIcon />
			</Link>

			<Link to='/users'>
				<PeopleOutlineIcon />
			</Link>

			<Link to='/settings'>
				<SettingsIcon />
			</Link>
		</Box>
	)
}
