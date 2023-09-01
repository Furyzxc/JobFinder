import { useActions, useInput } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'
import { Section } from '@/components/settings/entities/profileSection'

type PropsType = {
	name: string
	description?: string
	initialValue: string
	multiline?: boolean
	fieldName: 'name' | 'bio'
}

export const MainInfoEntity = ({
	name,
	description,
	initialValue,
	multiline,
	fieldName,
}: PropsType) => {
	const { setMainValue } = useActions()
	const { bind } = useInput(initialValue)

	const handleBlur = (value: string) => {
		setMainValue({ fieldName, value })
	}

	return (
		<Section name={name} description={description}>
			<Input {...bind} multiline={multiline} onBlur={handleBlur} />
		</Section>
	)
}
