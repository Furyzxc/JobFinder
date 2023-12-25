import { Stack } from '@mui/material'
import { ArticleList } from '../features/articleList'

export const News = () => {
	return (
		<Stack sx={{ p: '0 0 0 10px' }}>
			{/*search by keyword does not work*/}
			{/*<NewsFilter />*/}
			<ArticleList />
		</Stack>
	)
}
