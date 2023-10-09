import { Stack } from '@mui/material'
import { Article } from '../../entities/article'
import { useGetNewsQuery } from '../../api'

export const ArticleList = () => {
	const { data } = useGetNewsQuery()

	if (data) {
		return (
			<Stack direction={'row'} flexWrap={'wrap'} className={'scroll'}>
				{data.news.map(({ id, ...article }) => (
					<Article {...article} key={id} />
				))}
			</Stack>
		)
	}
}
