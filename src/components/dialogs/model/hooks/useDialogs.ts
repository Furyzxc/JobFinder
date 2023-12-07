import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMuiDialog, useSmoothAppearance } from '@/shared/model/hooks'
import { useRequestDialogsQuery } from '@/components/dialogs/api/api.ts'

type Dialogs = {
	id: number
	open: boolean
	ref: any
	isError: boolean
}

export const useDialogs = (): Dialogs => {
	const { userId } = useParams()

	const id = Number(userId) // possible NaN

	const { isError } = useRequestDialogsQuery()

	const { ref } = useSmoothAppearance(0.1)

	const width = document.body.clientWidth

	const { open, setOpen } = useMuiDialog(!id || width >= 900)

	useEffect(() => {
		if (width < 900) {
			if (userId) {
				setOpen(false)
				return
			}
			setOpen(true)
		}
	}, [setOpen, userId, width])

	return {
		id,
		open,
		ref,
		isError,
	}
}
