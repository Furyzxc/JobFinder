import { Grid } from '@mui/material'
import { memo } from 'react'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'
import s from './chat.module.css'
import { useGetProfileQuery } from '@/components/profile'

type PropsType = {
	id: number
}

export const Chat = memo(({ id }: PropsType) => {
	const { data: profile } = useGetProfileQuery(id)

	const dialogName = profile?.name

	return (
		<Grid direction={'column'} container className={s.chatContainer}>
			<Grid item xs={1} className={s.title}>
				{dialogName && dialogName}
			</Grid>
			<Grid item xs className={s.messages + ' scroll'}>
				<Messages />
			</Grid>
			<Grid item xs={0.6}>
				<DialogsForm />
			</Grid>
		</Grid>
	)
})
