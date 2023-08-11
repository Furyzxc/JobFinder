import { useOwnerInfo } from './useOwnerInfo.ts'

interface Entity {
	name: string
	defaultValue: string

	// TODO
	// ref: any
	description?: string
	multiline?: boolean
}

export const useEntities = (): Entity[] => {
	const {
		info: { fullName, status },
	} = useOwnerInfo()

	const entities: Entity[] = []

	// mutates entities
	const addEntity = (
		name: string,
		defaultValue: string,
		description?: string,
		multiline?: boolean
	) => {
		entities.push({
			name,
			defaultValue,
			description,
			multiline,
		})
	}

	addEntity('Name', fullName, 'Your name will appear around JobFinder.')

	addEntity('Bio', status, undefined, true)

	return entities
}
