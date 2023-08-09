import { Grid } from '@mui/material'
import { WithLoading } from '@/shared/hoc'
import { Dialog } from '@/entities/dialog'
import { useRequestDialogsQuery } from '@/slices/dialogs'
import s from './list.module.css'

export const DialogsList = () => {
	const { isLoading, data } = useRequestDialogsQuery()

	return (
		<WithLoading isLoading={isLoading}>
			<Grid container className={s.list + ' scroll height'}>
				{data?.map(dialog => (
					<Grid item key={dialog.id} xs={12}>
						<Dialog {...dialog} />
					</Grid>
				))}
			</Grid>
		</WithLoading>
	)
}
