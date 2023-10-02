import {
	BrushOutlined,
	PermIdentityOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import { Tabs } from '@mui/material'
import { useState } from 'react'
import { NavigationTab } from '../../entities/navigationElement'

// settings navigation on left side
export const Navigation = () => {
	const [tab, setTab] = useState<number>()
	const handleChange = (_: any, newValue: number) => {
		setTab(newValue)
	}

	return (
		<Tabs
			sx={{ pr: '10px', alignItems: 'center' }}
			onChange={handleChange}
			orientation={'vertical'}
			value={tab}
		>
			<NavigationTab
				icon={<PermIdentityOutlined sx={{ mb: '-6px', fontSize: 23 }} />}
				label={'Profile'}
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

			{/*<NavigationElement*/}
			{/*	startIcon={<PermIdentityOutlined />}*/}
			{/*	name={'Public profile'}*/}
			{/*	path={'profile'}*/}
			{/*/>*/}
			{/*<NavigationElement*/}
			{/*	startIcon={<SettingsOutlined />}*/}
			{/*	name={'Account'}*/}
			{/*	path={'account'}*/}
			{/*/>*/}
			{/*<NavigationElement*/}
			{/*	startIcon={<BrushOutlined />}*/}
			{/*	name={'Appearance'}*/}
			{/*	path={'appearance'}*/}
			{/*/>*/}
		</Tabs>
	)
}
