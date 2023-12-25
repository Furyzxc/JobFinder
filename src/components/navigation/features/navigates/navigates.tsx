import {
	ArticleOutlined,
	MailOutline,
	MusicNoteOutlined,
	PeopleOutline,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Tabs } from '@mui/material'
import { smile } from '@/assets/status/smile.tsx'
import { navigationTabValues } from '@/shared/constants'
import { NavigationTab } from '@/components/settings/entities/navigationTab'
import { useNavigates } from '../../model/hooks'

const { STATUS, PROFILE, DIALOGS, MUSIC, NEWS, USERS, SETTINGS } =
	navigationTabValues

type PropsType = {
	close: () => void
}

const css = { mb: '-6px', fontSize: 23 }

export const Navigates = ({ close }: PropsType) => {
	const { bindTabs } = useNavigates()

	return (
		<Tabs
			{...bindTabs}
			orientation={'vertical'}
			sx={{ alignItems: 'center', flexGrow: 1 }}
		>
			<NavigationTab
				value={STATUS}
				icon={smile}
				path={'?st=true'}
				label={'Set Status'}
				onClick={close}
			/>
			<NavigationTab
				value={PROFILE}
				icon={<PermIdentityOutlined sx={css} />}
				path={'/profile'}
				label={'Your Account'}
				onClick={close}
			/>
			<NavigationTab
				value={DIALOGS}
				icon={<MailOutline sx={css} />}
				label={'Dialogs'}
				path={'/dialogs'}
				onClick={close}
			/>
			<NavigationTab
				value={MUSIC}
				icon={<MusicNoteOutlined sx={css} />}
				label={'Music'}
				path={'/music'}
				onClick={close}
			/>
			<NavigationTab
				value={NEWS}
				icon={<ArticleOutlined sx={css} />}
				onClick={close}
				label={'News'}
				path={'/news'}
			/>
			<NavigationTab
				value={USERS}
				icon={<PeopleOutline sx={css} />}
				label={'Users'}
				path={'/users?count=30'}
				onClick={close}
			/>
			<NavigationTab
				value={SETTINGS}
				onClick={close}
				icon={<SettingsOutlined sx={css} />}
				label={'Settings'}
				path={'/settings'}
			/>
		</Tabs>
	)
}
