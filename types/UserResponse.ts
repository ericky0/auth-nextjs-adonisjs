import { AxiosError } from "axios"

export interface UserResponse {
    user: {
        id: string
        name: string
        email: string
        avatar: string
        created_at: string
        updated_at: string
    } | null,
    error: AxiosError | null
}

