import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
const AccessDenied = () => {
  return (
      <div className="fixed inset-0 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <AiFillCloseCircle className="text-6xl w-16 h-16 text-[#248F59]" />
      <span className="mt-4 text-gray-500 text-lg font-semibold">Access Denied</span>
      <span className="mt-4 text-gray-500 text-lg font-semibold">You are not Authenticated</span>
    </div>
  </div>
  )
}

export default AccessDenied