import { useNavigate } from 'react-router-dom'
import { useActions, useSmoothAppearance } from '@/shared/model/hooks'
import { formatTimeByDate } from '../../lib/format-time.ts'

type Dialog = {
	ref: any
	time: string
	onClick: () => void
}

export const useDialog = (
	name: string,
	avatar: string | null,
	id: string | number,
	lastDialogActivityDate: string
): Dialog => {
	const navigate = useNavigate()

	const { setChatProfile } = useActions()

	const { ref } = useSmoothAppearance()

	const onClick = () => {
		navigate('/dialogs/' + id)

		if (name && avatar !== undefined) {
			setChatProfile({ name, avatar, userId: id })
		}
	}

	const time = formatTimeByDate(lastDialogActivityDate)

	return { onClick, ref, time }
}
