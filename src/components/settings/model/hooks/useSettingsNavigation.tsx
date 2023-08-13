import { PermIdentityOutlined, SettingsOutlined } from '@mui/icons-material'
import { ReactNode } from 'react'

export interface IEntity {
	name: string // navigation element name
	icon: ReactNode // navigation element icon that displays on left side
	path: string // path that element navigates after click
}

export const useSettingsNavigation = (): IEntity[] => [
	{
		name: 'Public profile',
		icon: <PermIdentityOutlined />,
		path: 'profile',
	},
	{
		name: 'Account',
		icon: <SettingsOutlined />,
		path: 'account',
	},
]
