import api from "@/services/api"
import { UserResponse } from "@/types/UserResponse"
import { AxiosError } from "axios"

export async function getClientSession(): Promise<UserResponse>{
  try {
    const res = await api('/auth/session')
    return {
      user: res.data,
      error: null,
    }
  } catch (e) {
    const error = e as AxiosError
    return {
      user: null,
      error,
    }
  }
}