import {
	LockOutlined,
	MailOutline,
	MusicNoteOutlined,
	Newspaper,
	PeopleOutline,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Stack } from '@mui/material'
import { NavigationElement } from '@/components/settings/entities/navigationElement'
import { Status } from '../status'

type PropsType = {
	close: () => void
}

export const Navigates = ({ close }: PropsType) => {
	return (
		<Stack>
			<Status />
			<Stack>
				<NavigationElement
					startIcon={<PermIdentityOutlined />}
					name={'Your Account'}
					path={'/profile'}
					onClick={close}
				/>
				<NavigationElement
					startIcon={<MailOutline />}
					name={'Dialogs'}
					path={'/dialogs'}
					onClick={close}
				/>
				<NavigationElement
					startIcon={<MusicNoteOutlined />}
					disabled={true}
					name={'Music'}
					path={'/music'}
					endIcon={<LockOutlined />}
				/>
				<NavigationElement
					disabled={true}
					startIcon={<Newspaper />}
					name={'News'}
					path={'/news'}
					endIcon={<LockOutlined />}
				/>
				<NavigationElement
					startIcon={<PeopleOutline />}
					name={'Users'}
					path={'/users?count=30'}
					onClick={close}
				/>
				<NavigationElement
					onClick={close}
					startIcon={<SettingsOutlined />}
					name={'Settings'}
					path={'/settings'}
				/>
			</Stack>
		</Stack>
	)
}
