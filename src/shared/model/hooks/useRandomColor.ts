import { useMemo } from 'react'
import { COLORS } from '@/shared/style/colors'

// returns random color
export const useRandomColor = (): string => {
	return useMemo(
		() => COLORS[Math.floor(Math.random() * COLORS.length)][500],
		[]
	)
}
