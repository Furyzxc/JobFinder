import { PermIdentityOutlined, SettingsOutlined } from '@mui/icons-material'
import { ReactNode } from 'react'

export interface IEntity {
	name: string
	icon: ReactNode
	path: string
}

export const entities: IEntity[] = [
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
