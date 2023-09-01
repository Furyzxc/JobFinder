import { useActions, useInput } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'
import { Section } from '../profileSection'

type PropsType = {
	initialValue: string
}

export const Description = ({ initialValue }: PropsType) => {
	const { bind } = useInput(initialValue)

	const { setMainValue } = useActions()
	const handleBlur = (value: string) =>
		setMainValue({ fieldName: 'lookingForAJobDescription', value })

	return (
		<Section name={'Additional Job Information'}>
			<Input {...bind} multiline onBlur={handleBlur} />
		</Section>
	)
}
