import api from "@/app/api"
import { AxiosError } from "axios"
import { cookies } from "next/headers"

interface UserResponse {
  user: any
  error: AxiosError | null
}

async function getSession(): Promise<UserResponse> {
  try {
    const { data } = await api.get('/auth/session', {
      withCredentials: true,
    })
    
    return {      
      user: data,
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

const Settings = async () => {


  const cookiess = cookies().getAll()

  console.log(cookiess)

  // const { user, error } = await getSession()
  // console.log(user, error?.response?.data)
  
  return (
    <div>
      <div>super secret settings</div>

      {/* <p>name: {user}</p> */}
      {/* <p>email: {data.email}</p> */}
    </div>
  )
}

export default Settings