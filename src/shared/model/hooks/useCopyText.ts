import { useRef } from 'react'

interface CopyText {
	copyText: () => void // function that copies text from ref element
	textRef: any // add this to element ref={ref}
}

export const useCopyText = (): CopyText => {
	const textRef = useRef<HTMLElement>()

	const copyText = () => {
		if (textRef.current) {
			const text = textRef.current.textContent
			navigator.clipboard.writeText(text || '').then()
		}
	}

	return { textRef, copyText }
}
