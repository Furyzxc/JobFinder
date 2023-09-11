import { Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithLoadingAndError } from '@/shared/hoc'
import { Dialog } from '../../entities/dialog'
import { useRequestDialogsQuery } from '../../api/api.ts'

export const DialogsList = memo(() => {
	const { data = [], isFetching, isError } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	return (
		<Grid item container sx={{ width: '100%', bgcolor: '#343942BD' }}>
			<Grid item xs={12} md={12} sm={8} sx={{ bgcolor: 'primary.light' }}>
				<Stack direction={'column'} className={'noNavigationHeight scroll'}>
					<WithLoadingAndError isLoading={isFetching} isError={isError}>
						{data.map(dialog => (
							<Dialog
								isSelected={+userId === dialog.id}
								key={dialog.id}
								{...dialog}
							/>
						))}
					</WithLoadingAndError>
				</Stack>
			</Grid>
		</Grid>
	)
})
