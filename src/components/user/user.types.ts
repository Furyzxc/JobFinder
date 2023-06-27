export type UserProps = {
    id: number,
    name: string,
    photos: {
        small: null | string,
        large: null | string
    }
    status: null | string
}