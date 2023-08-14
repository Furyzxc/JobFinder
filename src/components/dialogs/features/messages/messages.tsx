import { Chip, Divider } from '@mui/material'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div/div.tsx'
import { useRequestMessagesQuery } from '../../api/api.ts'
import s from './messages.module.css'
import { Message } from '@/components/dialogs/entities/message'

export const Messages = () => {
	const { userId = 0 } = useParams()

	const { data, isFetching, isError } = useRequestMessagesQuery(
		{ id: +userId },
		{ skip: !userId }
	)

	const messages = data?.items

	const dates: string[] = []

	const formattedToDDMMYYYY = (addedAt: string) =>
		dayjs(addedAt).format('DD/MM/YYYY')

	const isExist = (addedAt: string) => {
		const formattedTime = formattedToDDMMYYYY(addedAt)

		if (!dates.includes(formattedTime)) {
			dates.push(formattedTime)
			return false
		}
		return true
	}

	const { ref } = useSmoothAppearance(!isFetching)

	return (
		<div className={s.flexbox} ref={ref}>
			<WithLoading isLoading={isFetching}>
				<WithError isError={isError}>
					{messages && messages.length > 0 ? (
						messages.map(message => {
							return (
								<div key={message.id}>
									{!isExist(message.addedAt) && (
										<Divider sx={{ mb: '10px', textTransform: 'none' }}>
											<Chip
												color={'primary'}
												label={formattedToDDMMYYYY(message.addedAt)}
											/>
										</Divider>
									)}
									<Message {...message} me={message.senderId !== userId} />
								</div>
							)
						})
					) : (
						<Div>Enter your first message</Div>
					)}
				</WithError>
			</WithLoading>
		</div>
	)
}
