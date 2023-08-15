import { useAnimation } from './useAnimation.ts'

interface SmoothAppearance {
	// attach ref to jsx element ref={ref}
	ref: any
}

// animates the apperance of element, to make it work need to attach ref to element (ref={ref})
// and set css style opacity to 0 (opacity: 0)
export const useSmoothAppearance = (seconds = 0.3): SmoothAppearance => {
	const { ref } = useAnimation({ opacity: 1 }, { opacity: 0 }, seconds)

	return { ref }
}
