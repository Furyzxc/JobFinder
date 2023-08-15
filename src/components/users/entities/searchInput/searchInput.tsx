import { memo } from 'react'
import { useActions } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'
import { useUsersState } from '../../model/hooks'

export const SearchInput = memo(() => {
	const { setSearchingTerm } = useActions()

	const { term } = useUsersState()

	const handleInputChange = (value: string) => {
		// setting input value to store
		setSearchingTerm(value)
	}

	return (
		<Input placeholder={'Search'} onChange={handleInputChange} value={term} />
	)
})
