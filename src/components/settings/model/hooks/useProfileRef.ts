import { useRef } from 'react'

interface Output {
	nameRef: any
	bioRef: any
}

export const useProfileRef = (): Output => {
	const nameRef = useRef()
	const bioRef = useRef()

	return { nameRef, bioRef }
}
