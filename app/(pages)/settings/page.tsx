import { getServerSession } from "@/functions/getServerSession/getServerSession"

const Settings = async () => {
  
  const response = await getServerSession()
  console.log(response)
  
  return (
    <div>
      <div>super secret settings</div>

      <p>name: {response.user?.name}</p>
      <p>email: {response.user?.email}</p>
    </div>
  )
}

export default Settings