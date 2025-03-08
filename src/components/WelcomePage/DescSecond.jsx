import React from 'react'
import { Link } from 'react-router-dom'

const DescSecond = () => {
  return (
    <div className="componentContainer pt-10">
    <div className="bg-[#1c1c1d] p-4 m-4 h-[60dvh] flexColBet rounded-2xl">
      <div className="h-full w-full">
        <img className="" src="" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-white">
          Lorem, ipsum dolor.
        </h1>
        <p className="text-sm font-light text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ad aut nostrum ullam quo rem fugit, nisi cum,
          molestiae dignissimos, vel ea tenetur a qui esse quos. Voluptates,
          ut vel.
        </p>
      </div>
    </div>
    <div className="bg-[#1c1c1c] w-full p-2 flex items-baseline justify-center gap-4">
    <Link to='/first' className="border w-full p-1 bg-white text-black rounded-lg">{`<`}- </Link >
    <Link to='/third' className="border w-full p-1 bg-white text-black rounded-lg"> -{`>`}</Link >

    </div>
  </div>
  )
}

export default DescSecond