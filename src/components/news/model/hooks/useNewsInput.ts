import { ChangeEvent, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce, useInput } from '@/shared/model/hooks'
import { useLazyGetNewsQuery } from '@/components/news/api'

type NewsInput = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useNewsInput = (): NewsInput => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { bind } = useInput(searchParams.get('q') || '')

	const [requestNews] = useLazyGetNewsQuery()

	const debouncedRequest = useDebounce(() => requestNews(), 1000)

	useEffect(() => {
		// debouncedRequest()
	}, [debouncedRequest, searchParams])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		bind.onChange(e)

		const query = e.target.value

		if (query) {
			searchParams.set('q', query)
		} else {
			searchParams.delete('q')
		}
		setSearchParams(searchParams)
	}

	return { value: bind.value, onChange }
}
