export interface FollowRequestBody {
	userId: number
	follow: boolean
}

export interface ToggleFollowResponse {
	resultCode: number
}

export interface ProfileResponseBody {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	name: string
	bio: string | null

	socialAccounts: {
		github: string | null
		linkedin: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		telegram: string | null
	}

	photos: {
		avatar: string | null
		backgroundImg: string | null
	}
}

export interface TransformType {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string
	aboutMe: string // bio

	contacts: {
		github: string | null
		vk: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink: string | null
	}

	photos: {
		small: string | null
		large: string | null
	}
}

export interface SetStatusRequestBody {
	status: string
}

export interface StatusCode {
	resultCode: number
}

export interface StartChattingResponse {
	data: unknown
	fieldsErrors: [unknown]
	messages: [unknown]
	resultCode: number
}
