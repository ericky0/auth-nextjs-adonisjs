'use client'

import { useEffect } from "react"
import api from "../api"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface UserResponse {
  user: any
  error: AxiosError | null
}

const DashboardLayout = ({  children }: { children: React.ReactNode }) => {

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const { error } = await getSession()
      console.log(error?.message)
      if (error) {
        router.push('/')
        return
      }
      
    })()
  }, [router])

  return (
    <div>
      <header className="flex gap-4">
        <p className="font-bold"> navigation </p>      
        <Link href={'/dashboard'} className="text-pink-700">dashboard</Link>
        <Link href={'/settings'} className="text-pink-700">settings</Link>
        <button onClick={() => signOut().then(() => router.push('/'))}> Sign Out </button>
      </header>

      {children}
    </div>
  )
}

async function getSession(): Promise<UserResponse> {
  try {
    const { data } = (await api.get('/auth/session'))

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

async function signOut() {
    await api.delete('/auth')
}

export default DashboardLayout