import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="flex   w-full ">
      <h1 className="text-white bg-yellow-300 relative px-20 text-start text-base font-light">
        Infrastructure And Development Bank Of Zimbabwe Housing App: To Know
        More About Us{" "}
        <Link className="hover:text-red-500" href={`https/www.idbz`}>
          Visit: https/www.idbz
        </Link>
      </h1>
    </div>
  );
}

export default Header
