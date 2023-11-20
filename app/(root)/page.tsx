'use client'

import { getClientSession } from "@/functions/getClientSession/getClientSession"
import api from "@/services/api"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {

  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    (async () => {
      const { user } = await getClientSession()
      if (user) {
        router.push('/dashboard')
        setIsSuccess(true)
      }
    })()
  }, [router])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await api.post('/auth', {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value

      }).then((result) => {

        alert(JSON.stringify(result))
        router.push('/dashboard')
      })
    } catch (e) {
      const error = e as AxiosError
      alert (error.message)
    }
  }

  if (isSuccess === true) { 
    return <div>user already authenticated</div>
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <h1 className="mb-4">Nextjs authentication JWT verify httpOnly cookie</h1>
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-4">
          <div>
            <label htmlFor="email">email: </label>
            <input type="text" id="email" name="email" className="border rounded border-black"/>
          </div>
          <div>
            <label htmlFor="password">password: </label>
            <input type="password" id="password" name="password" className="border rounded border-black"/>
          </div>
          <button type="submit" className="p-2 bg-orange-600 text-white w-fit rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
