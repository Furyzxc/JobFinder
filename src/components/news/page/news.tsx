import { Stack } from '@mui/material'
import { AritcleList } from '../features/articleList'
import { NewsFilter } from '../features/newsFilter'

export const News = () => {
	return (
		<Stack className={'noNavigationHeight'}>
			<NewsFilter />
			<AritcleList />
		</Stack>
	)
}
