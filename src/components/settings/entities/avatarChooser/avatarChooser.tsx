import { CameraAlt } from '@mui/icons-material'
import { Avatar, Button, ButtonProps, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Preloader } from '@/shared/ui/preloader'
import { useAvatarChooser } from '../../model/hooks'

// start of styling for logo and overlay
const ImageInputButton = (props: ButtonProps<'label'>) => (
	<Button {...props} component='label' />
)

const ImageButton = styled(ImageInputButton)({
	position: 'relative',
	height: 150,
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.4,
		},
		'& .MuiImageMarked-root': {
			opacity: 0.9,
			transition: 'opacity 0.4s',
		},
	},
})

// styling for image/logo/profilepicture
const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
})

// styling for opacity effect
const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0,
	transition: theme.transitions.create('opacity'),
}))

const CenterText = styled(Typography)({
	zIndex: 2,
	fontSize: '40px',
	textAlign: 'center',
})

// end of styling
type PropsType = {
	img: string | null
	name: string
}

export const AvatarChooser = ({ img, name }: PropsType) => {
	const { imageStyle, isLoading, handleFileChange, image } =
		useAvatarChooser(img)

	return (
		<Avatar
			sx={{
				height: 150,
				width: 150,
				bgcolor: 'transparent',
			}}
		>
			<ImageButton
				focusRipple
				key={'random'}
				style={{
					width: '100%',
				}}
			>
				<ImageSrc
					style={{
						...imageStyle,
					}}
				/>
				{!image && (
					<CenterText className='MuiImageBackdrop-root'>
						{name[0].toUpperCase()}
					</CenterText>
				)}
				<ImageBackdrop
					className='MuiImageBackdrop-root'
					sx={{
						backgroundColor: (theme) => {
							if (isLoading) return theme.palette.common.black
						},
						opacity: isLoading ? 0.4 : undefined,
					}}
				/>
				{isLoading ? (
					<Preloader sx={{ top: '36%' }} />
				) : (
					<CameraAlt
						className='MuiImageMarked-root notranslate'
						fontSize='large'
						sx={{
							position: 'absolute',
							top: '37%',
							left: '38%',
							color: 'white',
							opacity: 0,
						}}
					/>
				)}
				<input
					type='file'
					accept='.png, .jpg, .jpeg'
					hidden
					disabled={isLoading}
					onChange={handleFileChange}
				/>
			</ImageButton>
		</Avatar>
	)
}
