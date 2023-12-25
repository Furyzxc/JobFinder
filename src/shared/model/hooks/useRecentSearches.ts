// src/hooks/useRecentSearches.tsx
import { useLocalStorage } from 'usehooks-ts'

export const useRecentSearches = (recentSearchStorage: string) => {
	const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
		recentSearchStorage,
		[]
	)

	return {
		recentSearches,
		setRecentSearches,
	}
}
