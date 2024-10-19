import DetailedStands from '@/components/DetailedStands';
import Stands from '@/components/Stands';
import Image from 'next/image';
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-Customgray font-sans min-h-screen">
      <div className="flex px-20 relative">
        <h1 className="text-start text-yellow-300 absolute top-12">
          IDBZ UPDATES
        </h1>
      </div>
      <div className="flex w-full justify-center pt-10">
        <Image
          className="hover:scale-110 duration-500"
          src="/IDBZ_logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <Stands />
      <DetailedStands />
    </div>
  );
}

export default Projects
