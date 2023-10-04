import {
	BrushOutlined,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Tabs } from '@mui/material'
import { useState } from 'react'
import { NavigationTab } from '../../entities/navigationTab'

// settings navigation on left side
export const Navigation = () => {
	const [tab, setTab] = useState(0)
	const handleChange = (_: any, newValue: number) => {
		setTab(newValue)
	}

	return (
		<Tabs
			sx={{ pr: '10px', color: 'secondary.light' }}
			onChange={handleChange}
			orientation={'vertical'}
			value={tab}
		>
			<NavigationTab
				icon={<PermIdentityOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Public profile'}
				path={'profile'}
			/>
			<NavigationTab
				icon={<SettingsOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Account'}
				path='account'
			/>
			<NavigationTab
				icon={<BrushOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Appearance'}
				path={'appearance'}
			/>
		</Tabs>
	)
}
