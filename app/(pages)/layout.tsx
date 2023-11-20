'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getClientSession } from "@/functions/getClientSession/getClientSession"
import api from "@/services/api"

const DashboardLayout = ({  children }: { children: React.ReactNode }) => {

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const { error } = await getClientSession()

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

async function signOut() {
    await api.delete('/auth')
}

export default DashboardLayout