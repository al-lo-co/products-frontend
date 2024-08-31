"use client"

import { logout } from "@/services/Auth"

export const Header = ({ token }) => {

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-3">

      {token && (<div className="flex items-center justify-between mx-3">
        <p>Logged in</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md m-3" onClick={handleLogout}>Logout</button>
      </div>
      )}
    </div>
  )
}