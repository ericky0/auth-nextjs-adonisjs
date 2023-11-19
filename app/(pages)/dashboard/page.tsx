'use client'
import api from "../../api"

const Dashboard = () => {

  const handleSubmit = async () => {

    const { data } = await api.get('/auth/session')
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
    <button className="border bg-gray-700 text-gray-100" onClick={() => handleSubmit()}> get authenticated user </button>
  )
}

export default Dashboard