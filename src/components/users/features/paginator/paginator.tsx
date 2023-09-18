import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material'
import { Box, Pagination, PaginationItem } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

type PropsType = {
	pagesCount: number
}

export const Paginator = ({ pagesCount }: PropsType) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const page = searchParams.get('page') || 1
	const handleChange = (_: unknown, value: number) => {
		searchParams.set('page', value + '')
		setSearchParams(searchParams)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Pagination
				sx={{ m: '0 auto', width: 'max-content', color: 'info.main' }}
				onChange={handleChange}
				count={pagesCount}
				page={+page}
				renderItem={(item) => {
					return (
						<PaginationItem
							sx={{ color: 'warning.main', maxWidth: '32px' }}
							slots={{ previous: ArrowBackRounded, next: ArrowForwardRounded }}
							{...item}
						/>
					)
				}}
			/>
		</Box>
	)
}
