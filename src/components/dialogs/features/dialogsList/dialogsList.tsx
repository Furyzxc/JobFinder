import { Stack } from '@mui/material'
import { WithLoading } from '@/shared/hoc'
import { useRequestDialogsQuery } from '../../api/api.ts'
import { Dialog } from '../../entities/dialog'
import s from './list.module.css'

export const DialogsList = () => {
	const { isLoading, data } = useRequestDialogsQuery()

	return (
		<WithLoading isLoading={isLoading}>
			<Stack direction={'column'} className={s.list + ' scroll'}>
				{data?.map(dialog => <Dialog key={dialog.id} {...dialog} />)}
			</Stack>
		</WithLoading>
	)
}
