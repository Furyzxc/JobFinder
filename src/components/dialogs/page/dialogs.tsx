import { Grid } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { useRequestDialogsQuery } from '../api/api.ts'
import { Chat } from '../features/chat'
import { DialogsList } from '../features/dialogsList'
import s from './dialogs.module.css'

export const Dialogs = () => {
	const { userId } = useParams()
	const { isError } = useRequestDialogsQuery()

	const { ref } = useSmoothAppearance()

	const [showDialogsList, setShowDialogsList] = useState(true)

	const documentWidth = document.documentElement.clientWidth

	const displayDialogsList = showDialogsList || documentWidth >= 900

	return (
		<Grid container ref={ref}>
			<WithError isError={isError}>
				<Grid
					item
					container
					xs={12}
					md={3}
					sm={12}
					style={{ display: displayDialogsList ? undefined : 'none' }}
					className={s.list + ' noNavigationHeight'}
				>
					{displayDialogsList && <DialogsList setIsShow={setShowDialogsList} />}
				</Grid>
				<Grid sx={{ position: 'relative' }} item xs={12} md={9} sm={12}>
					{userId ? (
						<Chat setIsShow={setShowDialogsList} />
					) : (
						<Div>Start Chatting</Div>
					)}
				</Grid>
			</WithError>
		</Grid>
	)
}
