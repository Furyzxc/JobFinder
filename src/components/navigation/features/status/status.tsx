import { Dialog, Stack } from '@mui/material'
import { smile } from '@/assets/status/smile.tsx'
import { WithSlide } from '@/shared/hoc'
import { useStatus } from '@/components/navigation/model/hooks'
import { NavigationTab } from '@/components/settings/entities/navigationElement'
import { ClearButton } from '../../entities/clearButton'
import { StatusInput } from '../../entities/statusInput'
import { StatusSuggestions } from '../../entities/statusSuggestions'
import { StatusTitle } from '../../entities/statusTitle'
import { SubmitButton } from '../../entities/submitButton'

const Smile = () => (
	<span
		style={{
			padding: '10px 0 0 4px',
			margin: '0 10px 0 0',
			fontSize: 20,
		}}
	>
		{smile}
	</span>
)

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
			<NavigationTab
				icon={<Smile />}
				label={'Set Status'}
				onClick={showStatus}
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
