import { Stack } from '@mui/material'
import { useMusic } from '@/components/music/model/hooks.ts'
import { Search } from '@/components/music/features/search'
import { ItemsList } from '@/components/music/features/itemsList'

export const Music = () => {
	useMusic()

	return (
		<Stack position={'relative'}>
			<Search />
			<ItemsList />
		</Stack>
	)
}
