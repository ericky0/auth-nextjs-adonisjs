import { cookies } from "next/dist/client/components/headers"

export default function cookieStore() {
  let string = ''
  cookies().getAll().map((cookie) => {
    string  += `${cookie.name}=${cookie.value};`
  })

  console.log(string)
  return string
}