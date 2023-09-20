import { Dialog, Stack } from '@mui/material'
import { smile } from '@/assets/status/smile.tsx'
import { WithSlide } from '@/shared/hoc'
import { useStatus } from '@/components/navigation/model/hooks'
import { NavigationElement } from '@/components/settings/entities/navigationElement'
import { ClearButton } from '../../entities/clearButton'
import { StatusInput } from '../../entities/statusInput'
import { StatusSuggestions } from '../../entities/statusSuggestions'
import { StatusTitle } from '../../entities/statusTitle'
import { SubmitButton } from '../../entities/submitButton/submitButton.tsx'

const Smile = () => <div style={{ padding: '5px 0 0 4px' }}>{smile}</div>

export const Status = () => {
	const {
		emoji,
		setEmoji,
		setInputValue,
		isLoading,
		open,
		reset,
		showStatus,
		editStatus,
		closeStatus,
		bindInput,
	} = useStatus()

	return (
		<>
			<NavigationElement
				path={'status'}
				startIcon={<Smile />}
				name={'Set Status'}
				onClick={showStatus}
				disabled={true}
			/>

			<Dialog
				keepMounted
				open={open}
				sx={{ bgcolor: '#4B515C9B' }}
				onClose={closeStatus}
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
						<StatusTitle close={closeStatus}>Edit status</StatusTitle>
						<StatusInput bind={bindInput} emoji={emoji} />
						<StatusSuggestions
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
		</>
	)
}
