import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Grid, Pagination, PaginationItem } from '@mui/material'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { getPagesCount } from '@/slices/paginator'

export const Paginator = () => {
	const { setPage } = useActions()

	const pagesCount = useAppSelector(getPagesCount)
	const handleChange = (_: any, value: number) => setPage(value)

	if (pagesCount > 1) {
		return (
			<Grid item>
				<Pagination
					onChange={handleChange}
					color={'primary'}
					sx={{ margin: 'auto', width: 'max-content' }}
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
			</Grid>
		)
	}
	return null
}
