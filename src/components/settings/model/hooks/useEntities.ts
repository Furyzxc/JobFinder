import { useEffect } from 'react'
import { useOwnerInfo } from './useOwnerInfo.ts'
import { useSetFieldValue } from '@/components/settings/model/hooks/useSetFieldValue.ts'

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

	const [setFieldValue] = useSetFieldValue()

	// setting name and bio to state
	useEffect(() => {
		name && setFieldValue('name', name)
		bio && setFieldValue('bio', bio)
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
		(value: string) => setFieldValue('name', value),
		'Your name will appear around JobFinder.'
	)

	addEntity(
		'Bio',
		bio,
		(value: string) => setFieldValue('bio', value),
		undefined,
		true
	)

	return entities
}
