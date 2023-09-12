import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

interface Hover {
	isHovered: boolean
	ref: MutableRefObject<any>
}

// Custom hook for tracking hover state
export const useHover = (): Hover => {
	const [isHovered, setIsHovered] = useState(false)

	const ref = useRef<HTMLElement>()

	const element = ref.current

	// Function to handle mouseenter event
	const handleMouseEnter = useCallback(() => setIsHovered(true), [])

	// Function to handle mouseleave event
	const handleMouseLeave = useCallback(() => setIsHovered(false), [])

	useEffect(() => {
		// Attach event listeners when the component mounts
		if (element) {
			element.addEventListener('mouseenter', handleMouseEnter)
			element.addEventListener('mouseleave', handleMouseLeave)

			// Clean up event listeners when the component unmounts
			return () => {
				element.removeEventListener('mouseenter', handleMouseEnter)
				element.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [element, handleMouseEnter, handleMouseLeave])

	return { isHovered, ref }
}
