import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Pagination, PaginationItem } from '@mui/material'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { getPagesCount } from '../../model/slice.ts'

export const Paginator = () => {
	const { setPage } = useActions()

	const pagesCount = useAppSelector(getPagesCount)
	const handleChange = (_: any, value: number) => setPage(value)

	return (
		<Pagination
			onChange={handleChange}
			color={'primary'}
			sx={{ margin: 'auto' }}
			count={pagesCount}
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
