export interface DialogsResponse {
	id: number
	userName: string
	hasNewMessages: boolean
	lastDialogActivityDate: string //'2023-07-11T23:47:06.07'
	lastUserActivityDate: string //'2023-07-11T21:04:10.95'
	photos: {
		small: null | string
		large: null | string
	}
}

export interface SendMessageRequest {
	userId: number
	body: string
}

export interface MessageSent {
	// From SendMessageResponse
	id: string // "db1ee4e7-acb3-4b1e-b744-05a76free3ad"
	body: string // message body
	translatedBody: null | unknown
	addedAt: string // "2023-07-12T00:53:15.723"
	senderId: number
	senderName: string
	recipientId: number
	recipientName: string
	viewed: boolean
	deletedBySender: boolean
	deletedByRecipient: boolean
	isSpam: boolean
	distributionId: null | unknown
}

export interface SendMessageResponse {
	data: {
		message: MessageSent
	}
	messages: string[]
	fieldsErrors: unknown[]
	resultCode: number // 0 is success
}

export interface MessageResponseType {
	// From GetMessageResponse
	addedAt: string
	body: string
	id: string
	recipientId: number
	senderId: number
	senderName: string
	translatedBody: null | unknown
	viewed: boolean
}

export interface MessagesResponse {
	error: unknown | null
	items: MessageResponseType[]
	totalCount: number
}

export interface MessagesRequest {
	id: number
	count?: number
}
