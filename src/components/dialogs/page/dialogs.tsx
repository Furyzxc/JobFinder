import { Grid } from '@mui/material'
import { WithError, WithSlide } from '@/shared/hoc'
import { Div } from '@/shared/ui/div'
import { useDialogs } from '../model/hooks'
import { Chat } from '../features/chat'
import { DialogsList } from '../features/dialogsList'
import s from './dialogs.module.css'

export const Dialogs = () => {
	const { ref, isError, open, id } = useDialogs()

	return (
		<Grid container ref={ref}>
			<WithError isError={isError}>
				<WithSlide direction={'right'} open={open}>
					<Grid
						item
						container
						xs={12}
						md={3}
						sm={12}
						className={s.list + ' noNavigationHeight'}
					>
						<DialogsList />
					</Grid>
				</WithSlide>
				<Grid
					sx={{ position: 'relative' }}
					className={'noNavigationHeight'}
					item
					xs={12}
					md={9}
					sm={12}
				>
					{id ? <Chat /> : <Div>Start Chatting</Div>}
				</Grid>
			</WithError>
		</Grid>
	)
}
