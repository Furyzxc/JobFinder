import { Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Dialog } from '../../entities/dialog'
import { DialogsListSkeletons } from '../../entities/dialogsListSkeletons'
import { useRequestDialogsQuery } from '../../api/api.ts'

export const DialogsList = memo(() => {
	const { data } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	return (
		<Grid item container sx={{ width: '100%', bgcolor: '#343942BD' }}>
			<Grid item xs={12} md={12} sm={8} sx={{ bgcolor: '#161B22' }}>
				<Stack direction={'column'} className={'noNavigationHeight scroll'}>
					{data ? (
						data.map(dialog => (
							<Dialog
								isSelected={+userId === dialog.id}
								key={dialog.id}
								{...dialog}
							/>
						))
					) : (
						<DialogsListSkeletons />
					)}
				</Stack>
			</Grid>
		</Grid>
	)
})
