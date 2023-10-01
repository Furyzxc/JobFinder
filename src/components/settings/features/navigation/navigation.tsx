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
		<Stack sx={{ pr: '10px' }}>
			<NavigationElement
				startIcon={<PermIdentityOutlined />}
				name={'Public profile'}
				path={'profile'}
			/>
			<NavigationElement
				startIcon={<SettingsOutlined />}
				name={'Account'}
				path={'account'}
			/>
			<NavigationElement
				startIcon={<BrushOutlined />}
				name={'Appearance'}
				path={'appearance'}
			/>
		</Stack>
	)
}
