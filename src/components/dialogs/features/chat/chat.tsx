import { Grid } from '@mui/material'
import { memo } from 'react'
import { BackBtnTypes } from '../../entities/backBtn'
import { ChatHeader } from '../../entities/chatHeader'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'

export const Chat = memo(({ setIsShow }: BackBtnTypes) => {
	return (
		<Grid
			sx={{ position: 'relative' }}
			direction={'column'}
			container
			className={'noNavigationHeight'}
		>
			<Grid item xs={1} sx={{ bgcolor: '#161B22', minHeight: '50px' }}>
				<ChatHeader setIsShow={setIsShow} />
			</Grid>
			<Grid
				item
				xs
				sx={{ width: '100%', position: 'relative', bgcolor: '#0D1117' }}
				className={' scroll'}
			>
				<Messages />
			</Grid>
			<Grid item xs={0.6}>
				<DialogsForm />
			</Grid>
		</Grid>
	)
})
