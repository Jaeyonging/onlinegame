import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const dan = 3

  return (
    <div className='flex w-[100vw] text-[red] h-[100vh] justify-center items-center'>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/cooking?dan=${dan}`)}
      >
        Button
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/racing?dan=${dan}`)}
      >
        Button
      </div>
    </div>
  )
}
