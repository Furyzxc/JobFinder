import { useAnimation } from './useAnimation.ts'

interface SmoothAppearance {
	// react ref
	ref: any
}

// animates the apperance of element, to make it work need to attach ref to element (ref={ref})
// and set css style opacity to 0 (opacity: 0)
export const useSmoothAppearance = (
	isStartAccepted?: boolean
): SmoothAppearance => {
	const { ref } = useAnimation(
		{ opacity: 1 },
		{ opacity: 0 },
		0.3,
		isStartAccepted
	)

	return { ref }
}
