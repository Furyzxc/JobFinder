import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithError, WithLoading } from '@/shared/hoc'
import { BackBtnTypes } from '../../entities/backBtn'
import { ChatHeader } from '../../entities/chatHeader'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'
import { useMessagesRequest } from '@/components/dialogs/model/hooks'

export const Chat = memo(({ setIsShow }: BackBtnTypes) => {
	const { messagesData, isFetching, isError, urlId } = useMessagesRequest()

	return (
		<Grid
			// sx={{ position: 'relative' }}
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
				<WithLoading isLoading={isFetching}>
					<WithError isError={isError}>
						<Messages messages={messagesData?.items} urlId={urlId} />
					</WithError>
				</WithLoading>
			</Grid>
			<Grid item xs={0.6}>
				<DialogsForm />
			</Grid>
		</Grid>
	)
})
