import { Stack } from '@mui/material'
import { Description } from '../jobDescription'
import { RadioButtons } from '../radioButtons'

type PropsType = {
	lookingForAJob: boolean
	lookingForAJobDescription: string
}

export const JobInfo = ({
	lookingForAJob,
	lookingForAJobDescription,
}: PropsType) => {
	return (
		<Stack spacing={1}>
			<RadioButtons initialValue={lookingForAJob} />
			<Description initialValue={lookingForAJobDescription} />
		</Stack>
	)
}
