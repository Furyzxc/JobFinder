import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBoolean, useMediaQuery } from 'usehooks-ts'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { useRequestDialogsQuery } from '@/components/dialogs/api/api.ts'

type Dialogs = {
	id: number
	open: boolean
	ref: any
	isError: boolean
}

export const useDialogs = (): Dialogs => {
	// taking userId from query string
	const { userId } = useParams()
	// converting id to type number
	const id = Number(userId) // possible NaN
	// requesting data
	const { isError } = useRequestDialogsQuery()
	// ref for animation
	const { ref } = useSmoothAppearance(0.1)
	// if screen width >= 900px -> matches = true
	const matches = useMediaQuery('(min-width: 900px)')
	// hook for opening and closing dialogs list
	const { value, setFalse, setTrue } = useBoolean(!id || matches)

	useEffect(() => {
		// if screen width >= 900px do nothing
		if (matches) return

		// if userId in query params we do not display dialogs list on phones
		if (userId) {
			setFalse()
			return
		}
		// if no userId in query params we display dialogs list
		setTrue()
	}, [matches, setFalse, setTrue, userId])

	return {
		id,
		open: value,
		ref,
		isError,
	}
}
