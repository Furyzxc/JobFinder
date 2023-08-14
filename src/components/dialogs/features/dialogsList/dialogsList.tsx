import { Stack } from '@mui/material'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { WithLoading } from '@/shared/hoc'
import { useRequestDialogsQuery } from '../../api/api.ts'
import { Dialog } from '../../entities/dialog'
import s from './list.module.css'

export const DialogsList = memo(() => {
	const { isLoading, data } = useRequestDialogsQuery()

	const { userId = 0 } = useParams()

	return (
		<WithLoading isLoading={isLoading}>
			<Stack direction={'column'} className={s.list + ' scroll'}>
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
