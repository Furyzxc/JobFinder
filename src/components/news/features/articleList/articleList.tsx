import { Snackbar, Stack } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import { WithLoadingAndError } from '@/shared/hoc'
import { Article } from '../../entities/article'
import { useGetNewsQuery } from '../../api'

export const ArticleList = () => {
	const { data, isFetching, isError } = useGetNewsQuery()
	const { value, setFalse } = useBoolean(false)
	return (
		<WithLoadingAndError isLoading={isFetching} isError={isError}>
			<Stack
				direction={'row'}
				flexWrap={'wrap'}
				sx={{ justifyContent: 'space-around' }}
			>
				{data ? (
					data.news.map(({ id, ...article }) => (
						<Article {...article} key={id} />
					))
				) : (
					<Snackbar
						message='Some error occured...'
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						open={value}
						onClose={setFalse}
					/>
				)}
			</Stack>
		</WithLoadingAndError>
	)
}
