import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface useOutsideOutput {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

// Hook that controls displaying of the element after click outside of this element
export const useOutside = (initialIsVisible: boolean): useOutsideOutput => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		if (isShow) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isShow])

	return { ref, isShow, setIsShow }
}
