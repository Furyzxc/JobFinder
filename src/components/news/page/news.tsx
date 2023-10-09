import { Stack } from '@mui/material'
import { ArticleList } from '../features/articleList'
import { NewsFilter } from '../features/newsFilter'

export const News = () => {
	return (
		<Stack className={'noNavigationHeight'} sx={{ p: '0 0 0 10px' }}>
			<NewsFilter />
			<ArticleList />
		</Stack>
	)
}
