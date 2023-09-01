import { memo } from 'react'
import { useActions, useInput } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'
import { useUsersState } from '../../model/hooks'

export const SearchInput = memo(() => {
	// getting action that will chage term value in state
	const { setSearchingTerm } = useActions()
	// getting term value from state
	const { term } = useUsersState()

	const handleBlur = (value: string) => {
		// setting input value to state
		setSearchingTerm(value)
	}

	const { bind } = useInput(term)

	return <Input {...bind} placeholder={'Search'} onBlur={handleBlur} />
})
