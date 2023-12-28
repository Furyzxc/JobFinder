import { Stack } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { ArticleList } from '../features/articleList'

export const News = () => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack ref={ref}>
			{/*search by keyword does not work*/}
			{/*<NewsFilter />*/}
			<ArticleList />
		</Stack>
	)
}
