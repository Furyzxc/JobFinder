import { useOwnerInfo } from './useOwnerInfo.ts'
import { useProfileRef } from '@/components/settings/model/hooks/useProfileRef.ts'

interface Entity {
	name: string
	defaultValue: string

	ref: any
	description?: string
	multiline?: boolean
}

export const useEntities = (): Entity[] => {
	const {
		info: { fullName, status },
	} = useOwnerInfo()

	const { nameRef, bioRef } = useProfileRef()

	const entities: Entity[] = []

	// mutates entities
	const addEntity = (
		name: string,
		ref: any,
		defaultValue: string,
		description?: string,
		multiline?: boolean
	) => {
		entities.push({
			name,
			ref,
			defaultValue,
			description,
			multiline,
		})
	}

	addEntity(
		'Name',
		nameRef,
		fullName,
		'Your name will appear around JobFinder.'
	)

	addEntity('Bio', bioRef, status, undefined, true)

	return entities
}
