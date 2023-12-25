import { Box, Stack } from '@mui/material'
import { SearchUI } from '@/shared/ui/search'
import { ItemsList } from '@/components/music/features/itemsList'
import { useMusic } from '@/components/music/model/hooks.ts'

export const Music = () => {
	useMusic()

	return (
		<Stack position={'relative'}>
			<Box sx={{ position: 'absolute', right: 0 }}>
				<SearchUI param={'q'} />
			</Box>
			<ItemsList />
		</Stack>
	)
}
