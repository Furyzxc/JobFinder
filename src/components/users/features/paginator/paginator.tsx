import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Pagination, PaginationItem } from '@mui/material'
import { useActions } from '@/shared/model/hooks'
import { usePaginator } from '../../model/hooks'

export const Paginator = () => {
	const { setPage } = useActions()

	const { page, pagesCount } = usePaginator()
	const handleChange = (_: unknown, value: number) => setPage(value)

	return (
		<Box sx={{ width: '100%' }}>
			<Pagination
				sx={{ m: '0 auto', width: 'max-content' }}
				onChange={handleChange}
				color={'primary'}
				count={pagesCount}
				page={page}
				renderItem={item => {
					return (
						<PaginationItem
							sx={{ color: 'white', maxWidth: '32px' }}
							slots={{ previous: ArrowBack, next: ArrowForward }}
							{...item}
						/>
					)
				}}
			/>
		</Box>
	)
}
