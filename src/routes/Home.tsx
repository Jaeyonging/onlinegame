import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const dan = 3

  return (
    <div className='flex w-[100vw] text-[red] h-[100vh] justify-center items-center gap-2 text-center'>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/bird?dan=${dan}`)}
      >
        Flappy Bird
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/cooking?dan=${dan}`)}
      >
        Cooking 
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/earthprotect?dan=${dan}`)}
      >
        EarthProtect
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/fortress?dan=${dan}`)}
      >
        Fortress
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/hangle?dan=${dan}`)}
      >
        Learning Hangle
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/racing?dan=${dan}`)}
      >
        Racing Car
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/shootingGame?dan=${dan}`)}
      >
        Shooting Game
      </div>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => navigate(`/games/waterTank?dan=${dan}`)}
      >
        Water Tank
      </div>
    </div>
  )
}
