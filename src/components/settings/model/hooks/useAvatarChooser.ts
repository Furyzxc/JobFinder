import { ChangeEvent, useEffect, useState } from 'react'
import { useRandomColor } from '@/shared/model/hooks'
import { useEditProfilePhotoMutation } from '@/components/settings/api/api.ts'
import { validFileExtensions } from '@/components/settings/constants'

type AvatarChooser = {
	isLoading: boolean
	handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
	image: string | null
	imageStyle:
		| {
				backgroundImage: string
		  }
		| {
				backgroundColor: string
		  }
}

export const useAvatarChooser = (img: string | null): AvatarChooser => {
	const randomColor = useRandomColor()

	const [image, setImage] = useState(img)

	const imageStyle = image
		? { backgroundImage: `url(${image})` }
		: { backgroundColor: randomColor }

	const [editPhoto, { data, isLoading }] = useEditProfilePhotoMutation()

	const handleFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const fileName = target.value

		const idxDot = fileName.lastIndexOf('.') + 1
		const fileExtension = fileName.slice(idxDot, fileName.length).toLowerCase()

		if (validFileExtensions.includes(fileExtension)) {
			const files = target.files

			if (files) {
				const file = files[0]

				const formData = new FormData()
				formData.append('image', file)

				editPhoto(formData)
			}
		} else {
			alert('Only jpg/jpeg and png files are allowed!')
		}
	}

	useEffect(() => {
		if (data && data.data.photos) setImage(data.data.photos.small)
	}, [data])

	return {
		isLoading,
		handleFileChange,
		imageStyle,
		image,
	}
}
