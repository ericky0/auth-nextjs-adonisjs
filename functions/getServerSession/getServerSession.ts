import api from "@/services/api";
import { AxiosError } from "axios";
import cookieStore from "@/hooks/getCookies";


export async function getServerSession() {

  const cookies = cookieStore()

  try {
    const res = await api.get('/auth/session', {
      headers: {
        Cookie: `${cookies}`
      }
    })

    return {
      user: res.data,
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