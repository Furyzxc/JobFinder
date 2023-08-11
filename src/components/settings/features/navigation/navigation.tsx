import { Stack } from '@mui/material'
import { NavigationGroup } from '@/components/settings/features/navigation/navigationGroup.tsx'
import { entities } from '@/components/settings/features/navigation/objects.tsx'

export const Navigation = () => {
	return (
		<Stack direction={'column'}>
			<NavigationGroup entities={entities} />
		</Stack>
	)
}
