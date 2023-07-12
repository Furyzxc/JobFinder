export interface UserResData {
    name: string,
    id: number,
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

export interface GetUsersResponse {
    items: UserResData[],
    totalCount: number
    error: null | string
}


export interface RequestUsersBody {
    count?: number
    page?: number
    term?: string
    friend?: boolean
}
