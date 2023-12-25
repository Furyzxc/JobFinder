import { useState } from 'react'
import { useTab } from './useTab.ts'

interface Navigates {
	bindTabs: {
		value: string
		onChange: (_: any, newValue: string) => void
	}
}

export const useNavigates = (): Navigates => {
	const tab = useTab()
	const [selectedTab, setSelectedTab] = useState(tab)

	const onChange = (_: any, newValue: string) => setSelectedTab(newValue)

	return {
		bindTabs: { value: selectedTab, onChange },
	}
}
