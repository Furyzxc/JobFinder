// pages/index.tsx
import { Box } from '@mui/material'
import { useRef } from 'react'
import { useBoolean } from 'usehooks-ts'
import { useRecentSearches } from '@/shared/model/hooks'
import { RecentSearches } from './recentSearches'
import { Searchbar } from './searchbar'

type PropsType = {
	param: string // 'q' , 'term' ...
	recentSearchStorage: string // 'recent-users'..
}

export const SearchUI = ({ param, recentSearchStorage }: PropsType) => {
	const { recentSearches, setRecentSearches } =
		useRecentSearches(recentSearchStorage)
	// track state for showing RecentSearches
	const { value, setTrue, setFalse } = useBoolean(false)
	const anchorEl = useRef<HTMLDivElement>(null)
	return (
		<Box ref={anchorEl}>
			<Searchbar
				param={param}
				onSubmit={(searchTerm: string) => {
					// also add to push recent searches after every search
					if (!recentSearches.includes(searchTerm)) {
						setRecentSearches([searchTerm, ...recentSearches])
					}
				}}
				inputProps={{
					onFocus: setTrue,
				}}
			/>
			<RecentSearches
				recentSearchStorage={recentSearchStorage}
				open={value}
				anchorEl={anchorEl.current}
				onClose={setFalse}
			/>
		</Box>
	)
}
