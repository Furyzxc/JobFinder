import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Pagination, PaginationItem } from '@mui/material'
import { useActions } from '@/shared/model/hooks.ts'
import { usePaginator } from '../../model/hooks.ts'

export const Paginator = () => {
	const { setPage } = useActions()

	const { page, pagesCount } = usePaginator()
	const handleChange = (_: unknown, value: number) => setPage(value)

	return (
		<Pagination
			onChange={handleChange}
			color={'primary'}
			sx={{ margin: 'auto' }}
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
	)
}
