interface EditProfileResponse {
	resultCode: number // 0 is Success
	messages: [string] | [] // ['Something wrong'] | []
	data: unknown
}
