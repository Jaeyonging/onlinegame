import React from 'react'

export const Home = () => {
  const openUrl = (url: string) => {
    window.location.href = (url)
  }

  return (
    <div className='flex w-[100vw] text-[red] h-[100vh] justify-center items-center'>
      <div
        className='w-[100px] text-[white] bg-[black] cursor-pointer'
        onClick={() => openUrl("https://html-classic.itch.zone/html/9152267/dist/index.html")}
      >
        Button
      </div>
    </div>
  )
}
