import { Dialog, Stack } from '@mui/material'
import { WithAuth, WithSlide } from '@/shared/hoc'
import { ClearButton } from '@/components/status/features/clearButton'
import { StatusInput } from '@/components/status/features/statusInput'
import { StatusSuggestions } from '@/components/status/features/statusSuggestions'
import { StatusTitle } from '@/components/status/features/statusTitle'
import { SubmitButton } from '@/components/status/features/submitButton'
import { useStatus } from '@/components/status/model/hooks'

export const Status = () => {
	const {
		emoji,
		setEmoji,
		isLoading,
		open,
		reset,
		setInputValue,
		editStatus,
		onClose,
		bindInput,
		isAuthorized,
		initialStatusValue,
	} = useStatus()
	return (
		<WithAuth isAuth={isAuthorized}>
			<Dialog
				keepMounted
				open={open}
				sx={{ bgcolor: '#4B515C9B' }}
				onClose={onClose}
				PaperProps={{
					sx: {
						borderRadius: '11px',
						overflow: 'hidden',
					},
				}}
			>
				<WithSlide direction={'up'} open={open}>
					<Stack
						spacing={3}
						sx={{
							bgcolor: 'secondary.dark',
							p: '20px',
						}}
					>
						<StatusTitle close={onClose}>Edit status</StatusTitle>
						<StatusInput bind={bindInput} emoji={emoji} />
						<StatusSuggestions
							statusValue={initialStatusValue}
							setEmoji={setEmoji}
							setInputValue={setInputValue}
						/>
						<Stack
							direction={'row'}
							sx={{
								justifyContent: 'space-around',
								gap: '20px',
							}}
							flexWrap='wrap'
						>
							<SubmitButton disabled={isLoading} onClick={editStatus} />
							<ClearButton reset={reset} />
						</Stack>
					</Stack>
				</WithSlide>
			</Dialog>
		</WithAuth>
	)
}
