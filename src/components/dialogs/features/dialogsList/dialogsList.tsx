import { Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithLoading } from '@/shared/hoc'
import { useScroll } from '@/shared/model/hooks'
import { useRequestDialogsQuery } from '../../api/api.ts'
import { Dialog } from '../../entities/dialog'

export const DialogsList = memo(() => {
	const { isLoading, data } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	const scroll = useScroll()

	return (
		<WithLoading isLoading={isLoading}>
			<Stack
				direction={'column'}
				className={'noNavigationHeight scroll'}
				sx={{ bgcolor: '#161B22' }}
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
		</WithLoading>
	)
})
