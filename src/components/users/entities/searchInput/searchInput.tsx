import { useActions } from '@/shared/model/hooks.ts'
import { Input } from '@/shared/ui/input'
import { useUsersState } from '@/components/users/model/hooks.ts'

export const SearchInput = () => {
	const { setSearchingTerm } = useActions()

	const { term } = useUsersState()

	const handleInputChange = (value: string) => {
		// setting input value to store
		setSearchingTerm(value)
	}

	return (
		<Input placeholder={'Search'} onChange={handleInputChange} value={term} />
	)
}
