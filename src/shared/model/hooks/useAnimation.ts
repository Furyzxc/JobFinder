import { useAnimate, useInView } from 'framer-motion'
import { CSSProperties, useEffect } from 'react'

interface Animate {
	// attach this ref to element
	ref: any
}

export const useAnimation = (
	styles: CSSProperties,
	exitStyles: CSSProperties,
	duration_seconds?: number,
	startAccepted = true
): Animate => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView && startAccepted) {
			animate(
				scope.current,
				styles,
				duration_seconds ? { duration: duration_seconds } : undefined
			)
			// all styles to default
		} else if (exitStyles) {
			animate(scope.current, exitStyles, { duration: 0 })
		}
	}, [
		animate,
		exitStyles,
		duration_seconds, // 	USE_EFFECT DEPENDENCIES
		isInView,
		scope,
		styles,
		startAccepted,
	])

	return { ref: scope }
}
