// src/components/RecentSearches.tsx
import { AccessTime, Close } from '@mui/icons-material'
import {
	IconButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	PopperProps,
} from '@mui/material'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useRecentSearches } from '@/shared/model/hooks'

// we add an onClose prop in addition to the PopperProps
type Props = {
	onClose(): void
	recentSearchStorage: string
} & PopperProps

export const RecentSearches = ({
	open,
	anchorEl,
	onClose,
	recentSearchStorage,
}: Props) => {
	const { recentSearches, setRecentSearches } =
		useRecentSearches(recentSearchStorage)
	const paperRef = useRef<HTMLDivElement>(null)

	const el = anchorEl as HTMLElement
	// remove item when x button is click for an item
	const removeItem = (searchTerm: string) => {
		setRecentSearches(recentSearches.filter((item) => item !== searchTerm))
	}
	//listen to clickOutside events using this hook from usehooks-ts
	useOnClickOutside(paperRef, onClose)
	if (!anchorEl) return null
	return (
		<Popper anchorEl={anchorEl} open={open} disablePortal sx={{ zIndex: 1 }}>
			{/* set the width the same as the anchorElement */}
			<Paper sx={{ width: el.clientWidth, opacity: 0 }} ref={paperRef}>
				<MenuList>
					{!recentSearches.length ? (
						<>
							<MenuItem disabled>You have no recent searches...</MenuItem>
						</>
					) : (
						<>
							{recentSearches.map((searchTerm, i) => {
								return (
									<MenuItem key={i}>
										<ListItemIcon>
											<AccessTime />
										</ListItemIcon>
										<ListItemText>{searchTerm}</ListItemText>
										<IconButton onClick={() => removeItem(searchTerm)}>
											<Close />
										</IconButton>
									</MenuItem>
								)
							})}
						</>
					)}
				</MenuList>
			</Paper>
		</Popper>
	)
}
