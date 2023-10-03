import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type MuiDialog = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	onClose: () => void
}

export const useMuiDialog = (initialOpen: boolean): MuiDialog => {
	const [open, setOpen] = useState(initialOpen)

	const onClose = useCallback(() => setOpen(false), [])

	return {
		open,
		setOpen,
		onClose,
	}
}
