import {
	HomeOutlined,
	LockOutlined,
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
	endIcon?: ReactNode // lock
	isClickAccepted: undefined | true // onClick cannot take boolean value
}

export const useIcons = (): Icon[] => {
	return [
		{
			name: 'Home',
			path: '/profile',
			icon: <HomeOutlined />,
			isClickAccepted: true,
		},
		{
			name: 'Dialogs',
			path: '/dialogs',
			icon: <MailOutline />,
			isClickAccepted: true,
		},
		{
			name: 'Music',
			path: '/music',
			icon: <MusicNoteOutlined />,
			endIcon: <LockOutlined />,
			isClickAccepted: undefined,
		},
		{
			name: 'News',
			path: '/news',
			icon: <Newspaper />,
			endIcon: <LockOutlined />,
			isClickAccepted: undefined,
		},
		{
			name: 'Users',
			path: '/users',
			icon: <PeopleOutline />,
			isClickAccepted: true,
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: <SettingsOutlined />,
			isClickAccepted: true,
		},
	]
}
