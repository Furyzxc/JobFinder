import { Stack, Typography } from '@mui/material'
import { Suggestion } from '@/components/navigation/entities/suggestion'

type PropsType = {
	setInputValue: (value: string) => void
	setEmoji: (value: string) => void
}

export const StatusSuggestions = ({ setInputValue, setEmoji }: PropsType) => {
	return (
		<Stack spacing={1}>
			<Typography sx={{ fontSize: '13px' }}>Suggestions:</Typography>
			<Stack direction={'row'} sx={{ p: '10px' }} flexWrap={'wrap'}>
				<Stack sx={{ minWidth: '300px', mb: '15px' }} spacing={1}>
					<Suggestion
						setEmoji={setEmoji}
						setInputValue={setInputValue}
						text={'On vacation'}
						icon={'🌴'}
					/>
					<Suggestion
						setEmoji={setEmoji}
						text={'Working from home'}
						setInputValue={setInputValue}
						icon={'🏠'}
					/>
				</Stack>
				<Stack width={'208px'} spacing={1}>
					<Suggestion
						setEmoji={setEmoji}
						text={'Out sick'}
						setInputValue={setInputValue}
						icon={'🤒'}
					/>
					<Suggestion
						text={'Focusing'}
						setEmoji={setEmoji}
						setInputValue={setInputValue}
						icon={'🎯'}
					/>
				</Stack>
			</Stack>
		</Stack>
	)
}
