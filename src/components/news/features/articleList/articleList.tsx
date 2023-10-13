import { Snackbar, Stack } from '@mui/material'
import { WithLoadingAndError } from '@/shared/hoc'
import { useMuiDialog } from '@/shared/model/hooks'
import { Article } from '../../entities/article'
import { useGetNewsQuery } from '../../api'

export const ArticleList = () => {
	const { data, isFetching, isError } = useGetNewsQuery()

	const { open, onClose } = useMuiDialog(false)
	return (
		<WithLoadingAndError isLoading={isFetching} isError={isError}>
			<Stack
				direction={'row'}
				flexWrap={'wrap'}
				sx={{ justifyContent: 'space-between' }}
			>
				{data ? (
					data.news.map(({ id, ...article }) => (
						<Article {...article} key={id} />
					))
				) : (
					<Snackbar
						message='Some error occured...'
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						open={open}
						onClose={onClose}
					/>
				)}
			</Stack>
		</WithLoadingAndError>
	)
}
