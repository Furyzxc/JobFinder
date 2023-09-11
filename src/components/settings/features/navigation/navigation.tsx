import {
	BrushOutlined,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Stack } from '@mui/material'
import { NavigationElement } from '../../entities/navigationElement'

// settings navigation on left side
export const Navigation = () => {
	return (
		<Stack direction={'column'} sx={{ pr: '10px' }}>
			<NavigationElement
				icon={<PermIdentityOutlined />}
				name={'Public profile'}
				path={'profile'}
			/>
			<NavigationElement
				icon={<SettingsOutlined />}
				name={'Account'}
				path={'account'}
			/>
			<NavigationElement
				icon={<BrushOutlined />}
				name={'Appearance'}
				path={'appearance'}
			/>
		</Stack>
	)
}
