import { Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithLoading } from '@/shared/hoc'
import { useScroll } from '@/shared/model/hooks'
import { useRequestDialogsQuery } from '../../api/api.ts'
import { Dialog } from '../../entities/dialog'
import { BackBtnTypes } from '@/components/dialogs/entities/backBtn'

export const DialogsList = memo(({ setIsShow }: BackBtnTypes) => {
	const { isLoading, data } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	const scroll = useScroll()

	return (
		<WithLoading isLoading={isLoading}>
			<Grid item container sx={{ width: '100%', bgcolor: '#343942BD' }}>
				<Grid item xs={6} md={12} sm={6} sx={{ bgcolor: '#161B22' }}>
					<Stack
						direction={'column'}
						className={'noNavigationHeight scroll'}
						{...scroll}
					>
						{data?.map(dialog => (
							<Dialog
								setIsShow={setIsShow}
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
