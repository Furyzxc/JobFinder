import { memo } from 'react'
import { SearchField } from '@/shared/ui/searchField'
import { useSearch } from '../../model/hooks'

export const SearchInput = memo(() => {
	const bind = useSearch()

	return <SearchField placeholder={'Search'} {...bind} />
})
