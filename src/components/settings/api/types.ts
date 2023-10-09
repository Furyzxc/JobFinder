export interface EditProfileResponse {
	resultCode: number // 0 is Success
	messages: [string] | [] // ['Something wrong'] | []
	data: unknown
}

export interface EditProfilePhotoResponse {
	data: {
		photos?: {
			small: string
			large: string
		}
	}
	messages: string[] | ['File should have .jpg, .jpeg or .png extension']
	fieldsErrors: unknown[]
	resultCode: number // 0 = success
}
