import { useEffect } from 'react'
import { useActions } from '@/shared/model/hooks.ts'
import { useOwnerInfo } from './useOwnerInfo.ts'

interface Entity {
	name: string
	defaultValue: string | undefined | null
	onBlur: (value: string) => void
	description?: string
	multiline?: boolean
}

export const useEntities = (): Entity[] => {
	const { info } = useOwnerInfo()

	const name = info?.name
	const bio = info?.bio

	const { setMainValue } = useActions()

	const setFieldValue = (fieldName: 'name' | 'bio') => (value: string) =>
		setMainValue({ fieldName, value })

	// setting name and bio to state
	useEffect(() => {
		name && setFieldValue('name')(name)
		bio && setFieldValue('bio')(bio)
	}, [bio, name, setFieldValue])

	const entities: Entity[] = []

	// mutates entities
	const addEntity = (
		name: string,
		defaultValue: string | undefined | null,
		onBlur: (value: string) => void,
		description?: string,
		multiline?: boolean
	) => {
		entities.push({
			name,
			defaultValue,
			onBlur,
			description,
			multiline,
		})
	}

	addEntity(
		'Name',
		name,
		setFieldValue('name'),
		'Your name will appear around JobFinder.'
	)

	addEntity('Bio', bio, setFieldValue('bio'), undefined, true)

	return entities
}
