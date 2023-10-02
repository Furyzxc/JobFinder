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
	messages: string[] | ['File should has .jpg, .jpeg or .png extendion']
	fieldsErrors: unknown[]
	resultCode: number // 0 = success
}
