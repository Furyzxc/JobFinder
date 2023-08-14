import { useCallback } from 'react'
import { useActions } from '@/shared/model/hooks'
import { MainFieldType } from '../slice.ts'

type SetFieldValue = [
	setMainValue: (fieldName: MainFieldType, value: string | boolean) => void,
]
// simplifies communication with store
export const useSetFieldValue = (): SetFieldValue => {
	const { setMainValue } = useActions()

	return [
		useCallback(
			(fieldName: MainFieldType, value: string | boolean) =>
				setMainValue({ fieldName, value }),
			[setMainValue]
		),
	]
}
