
// import Image from 'next/image'
import React from 'react'
// import Line from '/Line.svg'

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        {/* <Image src={Line} alt="line" width={100} height={100} /> */}
      <div className="flex flex-row justify-between items-center w-full max-w-6xl px-4">
        <h1 className="text-2xl font-bold">logo here</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p>Featured</p>
          <p>How it works</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>
        <p>Contact us</p>
      </div>
      <div className='pt-8'> 
        <p className='text-[#6F6F6F] text-sm'>© DesignOrah 2025</p>
      </div>
    </div>
  )
}

export default Page
