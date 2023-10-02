import {
	MailOutline,
	MusicNoteOutlined,
	Newspaper,
	PeopleOutline,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Tabs } from '@mui/material'
import { useState } from 'react'
import { NavigationTab } from '@/components/settings/entities/navigationElement'
import { Status } from '../status'

type PropsType = {
	close: () => void
}

export const Navigates = ({ close }: PropsType) => {
	const [tab, setTab] = useState<number>()
	const handleChange = (_: any, newValue: number) => {
		setTab(newValue)
	}
	return (
		<Tabs
			orientation={'vertical'}
			value={tab}
			onChange={handleChange}
			sx={{ alignItems: 'center' }}
		>
			<Status />

			<NavigationTab
				icon={<PermIdentityOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				path={'profile'}
				label={'Your Account'}
				onClick={close}
			/>
			<NavigationTab
				icon={<MailOutline sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Dialogs'}
				path={'/dialogs'}
				onClick={close}
			/>
			<NavigationTab
				icon={<MusicNoteOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				disabled
				label={'Music'}
				path={'/music'}
				// endIcon={<LockOutlined />}
			/>
			<NavigationTab
				disabled
				icon={<Newspaper sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'News'}
				path={'/news'}
				// endIcon={<LockOutlined />}
			/>
			<NavigationTab
				icon={<PeopleOutline sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Users'}
				path={'/users?count=30'}
				onClick={close}
			/>
			<NavigationTab
				onClick={close}
				icon={<SettingsOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Settings'}
				path={'/settings'}
			/>
		</Tabs>
	)
}
