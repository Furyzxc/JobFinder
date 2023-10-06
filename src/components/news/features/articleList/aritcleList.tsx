import { Stack } from '@mui/material'
import { Article } from '../../entities/article'
import { useGetNewsQuery } from '../../api'

export const AritcleList = () => {
	const { data } = useGetNewsQuery()

	if (data) {
		return (
			<Stack direction={'row'} flexWrap={'wrap'} className={'scroll'}>
				{data.articles.map((article) => (
					<Article {...article} />
				))}
			</Stack>
		)
	}
}
