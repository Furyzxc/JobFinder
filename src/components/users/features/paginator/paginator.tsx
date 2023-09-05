import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Pagination, PaginationItem } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { addNewParamWithParamsReturn } from '@/shared/lib/addNewParam.ts'

type PropsType = {
	pagesCount: number
}

export const Paginator = ({ pagesCount }: PropsType) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const page = searchParams.get('page') || 1
	const handleChange = (_: unknown, value: number) =>
		setSearchParams(prevParams =>
			addNewParamWithParamsReturn(prevParams, { page: value + '' })
		)

	return (
		<Box sx={{ width: '100%' }}>
			<Pagination
				sx={{ m: '0 auto', width: 'max-content' }}
				onChange={handleChange}
				color={'primary'}
				count={pagesCount}
				page={+page}
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
