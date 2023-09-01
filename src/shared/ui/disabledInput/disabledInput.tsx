import { Input } from '@/shared/ui/input'

type PropsType = {
	value: string
}

export const DisabledInput = ({ value }: PropsType) => {
	return <Input width={'100%'} disabled multiline defaultValue={value} />
}
