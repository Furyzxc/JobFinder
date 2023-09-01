import { Stack } from '@mui/material'
import { useSettingsNavigation } from '../../model/hooks'
import { NavigationGroup } from '../../entities/navigationGroup'

// settings navigation on left side
export const Navigation = () => {
	const entities = useSettingsNavigation()

	return (
		<Stack direction={'column'}>
			<NavigationGroup entities={entities} />
		</Stack>
	)
}
