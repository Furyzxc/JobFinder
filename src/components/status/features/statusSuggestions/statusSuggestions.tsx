import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Suggestion } from '../../entities/suggestion'

type PropsType = {
	setInputValue: (value: string) => void
	setEmoji: (value: string) => void
	statusValue: string
}

export const StatusSuggestions = ({
	setInputValue,
	setEmoji,
	statusValue,
}: PropsType) => {
	useEffect(
		() => () => {
			setInputValue(statusValue)
			setEmoji('')
		},
		[setEmoj, i]
	)
	return (
		<Stack spacing={1}>
			<Typography sx={{ fontSize: '13px' }}>Suggestions:</Typography>
			<Stack
				direction={'row'}
				sx={{ p: '10px', justifyContent: 'start' }}
				flexWrap={'wrap'}
			>
				<Stack sx={{ mb: '9px', width: '200px' }} spacing={1}>
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
				<Stack spacing={1} sx={{ justifyContent: 'start' }}>
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
