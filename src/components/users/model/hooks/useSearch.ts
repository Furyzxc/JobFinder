import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce, useInput } from '@/shared/model/hooks'

interface Search {
	value: string
	onChange: (event: any) => void
}

export const useSearch = (): Search => {
	const [searchParams, setSearchParams] = useSearchParams()

	const {
		bind: { value: term, onChange },
	} = useInput(searchParams.get('term') || '')

	const changeTermParam = useCallback(() => {
		// if term is not empty string, we set new value
		if (term) {
			searchParams.set('term', term)
		}
		// if term is empty string, we remove it from query string
		else {
			searchParams.delete('term')
		}
	}, [searchParams, term])

	const modifyParams = () => {
		changeTermParam()
		// deleting page param when updating term
		searchParams.delete('page')

		// setting new query string
		setSearchParams(searchParams)
	}

	const debouncedParamsChange = useDebounce(modifyParams, 1000)

	useEffect(() => {
		debouncedParamsChange()
	}, [term])

	return {
		value: term,
		onChange,
	}
}
