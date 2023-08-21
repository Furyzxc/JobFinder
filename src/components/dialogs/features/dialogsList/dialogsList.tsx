import { Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithLoading } from '@/shared/hoc'
import { useScroll } from '@/shared/model/hooks'
import { Dialog } from '../../entities/dialog'
import { useRequestDialogsQuery } from '../../api/api.ts'

export const DialogsList = memo(() => {
	const { isLoading, data } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	const scroll = useScroll()

	return (
		<WithLoading isLoading={isLoading}>
			<Grid item container sx={{ width: '100%', bgcolor: '#343942BD' }}>
				<Grid item xs={12} md={12} sm={8} sx={{ bgcolor: '#161B22' }}>
					<Stack
						direction={'column'}
						className={'noNavigationHeight scroll'}
						{...scroll}
					>
						{data?.map(dialog => (
							<Dialog
								isSelected={+userId === dialog.id}
								key={dialog.id}
								{...dialog}
							/>
						))}
					</Stack>
				</Grid>
			</Grid>
		</WithLoading>
	)
})
