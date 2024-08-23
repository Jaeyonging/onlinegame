import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='flex w-[100vw] text-[red] h-[100vh] justify-center items-center'>
      <div className='w-[100px] text-[white] bg-[black]' onClick={() => navigate("/games/cooking")}>
        Button
      </div>
    </div>
  )
}
