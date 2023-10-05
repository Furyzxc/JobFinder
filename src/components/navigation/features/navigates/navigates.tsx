import {
	MailOutline,
	MusicNoteOutlined,
	Newspaper,
	PeopleOutline,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Tabs } from '@mui/material'
import { navigationTabValues } from '@/shared/constants'
import { useActions } from '@/shared/model/hooks'
import { NavigationTab } from '@/components/settings/entities/navigationTab'
import { useNavigation } from '../../model/hooks'
import { TabsType } from '../../model'
import { Status } from '../status'

const { PROFILE, DIALOGS, MUSIC, NEWS, USERS, SETTINGS } = navigationTabValues

type PropsType = {
	close: () => void
}

export const Navigates = ({ close }: PropsType) => {
	const { value } = useNavigation()
	const { setNavigationTab } = useActions()
	const handleChange = (_: any, newValue: TabsType) => {
		setNavigationTab(newValue)
	}

	return (
		<Tabs
			orientation={'vertical'}
			value={value}
			onChange={handleChange}
			sx={{ alignItems: 'center' }}
		>
			<Status />

			<NavigationTab
				value={PROFILE}
				icon={<PermIdentityOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				path={'profile'}
				label={'Your Account'}
				onClick={close}
			/>
			<NavigationTab
				value={DIALOGS}
				icon={<MailOutline sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Dialogs'}
				path={'/dialogs'}
				onClick={close}
			/>
			<NavigationTab
				value={MUSIC}
				icon={<MusicNoteOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				disabled
				label={'Music'}
				path={'/music'}
			/>
			<NavigationTab
				value={NEWS}
				icon={<Newspaper sx={{ mb: '-6px', fontSize: 23 }} />}
				onClick={close}
				label={'News'}
				path={'/news'}
			/>
			<NavigationTab
				value={USERS}
				icon={<PeopleOutline sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Users'}
				path={'/users?count=30'}
				onClick={close}
			/>
			<NavigationTab
				value={SETTINGS}
				onClick={close}
				icon={<SettingsOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Settings'}
				path={'/settings'}
			/>
		</Tabs>
	)
}
