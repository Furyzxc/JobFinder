import {
	HomeOutlined,
	MailOutline,
	MusicNoteOutlined,
	Newspaper,
	PeopleOutline,
	SettingsOutlined,
} from '@mui/icons-material'
import { ReactNode } from 'react'

interface Icon {
	icon: ReactNode
	path: string
	name: string
}

export const useIcons = (): Icon[] => {
	return [
		{
			name: 'Home',
			path: '/profile',
			icon: <HomeOutlined />,
		},
		{
			name: 'Dialogs',
			path: '/dialogs',
			icon: <MailOutline />,
		},
		{
			name: 'Music',
			path: '/music',
			icon: <MusicNoteOutlined />,
		},
		{
			name: 'News',
			path: '/news',
			icon: <Newspaper />,
		},
		{
			name: 'Users',
			path: '/users',
			icon: <PeopleOutline />,
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: <SettingsOutlined />,
		},
	]
}
