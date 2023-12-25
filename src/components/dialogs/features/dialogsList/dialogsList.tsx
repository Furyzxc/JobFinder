import { Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { DialogsSkeletons } from '@/components/dialogs/features/dialogsSkeletons'
import { Dialog } from '../../entities/dialog'
import { useRequestDialogsQuery } from '../../api/api.ts'

export const DialogsList = memo(() => {
	const { data = [], isFetching, isError } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	return (
		<Grid item container>
			<Grid item xs={12} md={12} sm={8} sx={{ bgcolor: 'primary.light' }}>
				<Stack
					className={'noNavigationHeight scroll'}
					sx={{
						width: '100%',
						bgcolor: 'primary.light',
						borderRight: 'max(1px, 0.0625rem) solid',
						borderRightColor: 'secondary',
					}}
				>
					<WithError isError={isError}>
						{isFetching ? (
							<DialogsSkeletons />
						) : (
							data.map((dialog) => (
								<Dialog
									isSelected={userId === dialog.id + ''}
									key={dialog.id}
									{...dialog}
								/>
							))
						)}
					</WithError>
				</Stack>
			</Grid>
		</Grid>
	)
})
