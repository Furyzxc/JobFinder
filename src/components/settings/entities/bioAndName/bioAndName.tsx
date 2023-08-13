import { Input } from '@/shared/ui/input'
import { Section } from '@/components/settings/entities/profileSection'
import { useEntities } from '@/components/settings/model/hooks'

export const BioAndName = () => {
	const entities = useEntities()

	return (
		<>
			{entities.map(({ name, description, ...inputProps }) => (
				<Section name={name} description={description} key={name}>
					<Input {...inputProps} />
				</Section>
			))}
		</>
	)
}
