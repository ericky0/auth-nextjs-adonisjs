import api from "@/services/api"
import { UserResponse } from "@/types/UserResponse"
import { AxiosError } from "axios"
import { cookies } from "next/headers"


export async function getServerSession(): Promise<UserResponse> {

  const cookieStore = cookies().getAll().map((cookie) => {
    let string = ''
    string  += `${cookie.name}=${cookie.value}`
    return string
  })

  try {
    const response = await api.get('/auth/session', { headers: { Cookie: cookieStore }})
    return {      
      user: response.data,
      error: null,
    }
  } catch (e) {
    const error = e as AxiosError
    return {
      user: null,
      error
    }
  }
}