import { useEffect, useState } from 'react'

type ElementStyle = {
	overflowY: 'auto' | 'hidden'
}

interface Scroll {
	onTouchEnd: () => void
	onTouchStart: () => void
	style: ElementStyle
}

/* usage:
 const scroll = useScroll()
 <div
 {...scroll}
 className='scroll'
 >
 Something
 </div>
 */

export const useScroll = (): Scroll => {
	const [isOverflowActive, setIsOverflowActive] = useState(false)
	const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null)

	const onTouchStart = () => {
		setIsOverflowActive(true)
		if (timeoutId !== null) {
			clearTimeout(timeoutId) // Clear the existing timeout
		}
	}

	const onTouchEnd = () => {
		// Add a delay before removing the overflow style
		const newTimeoutId = setTimeout(() => {
			setIsOverflowActive(false)
		}, 3000) // Adjust the delay as needed

		setTimeoutId(newTimeoutId) // Store the new timeout ID
	}

	const style: ElementStyle = {
		// Apply the overflow style conditionally based on isOverflowActive
		overflowY: isOverflowActive ? 'auto' : 'hidden',
	}

	// Clear the timeout when the component unmounts
	useEffect(() => {
		return () => {
			if (timeoutId !== null) {
				clearTimeout(timeoutId)
			}
		}
	}, [timeoutId])

	return { onTouchStart, onTouchEnd, style }
}
