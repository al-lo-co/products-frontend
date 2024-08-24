"use client"

import { useAuth } from "@/app/context/AuthContext";

export const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-3">
      {isAuthenticated && (
        <div className="flex items-center justify-between mx-3">
          <p>Logged in</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md m-3" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}