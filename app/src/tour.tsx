import Image from "next/image";
import React from "react";

const Tour = () => {
  return (
    <div className="bg-Customgray font-sans min-h-screen">
      <h1 className="text-center text-yellow-300 py-8">
        You Can Take A Tour On Our Projects
      </h1>
      <div className="flex justify-between w-full px-20">
        <p className="text-white">Wilsgrove Stands</p>

        <form className="max-w-md ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-80">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brown focus:border-brown "
              placeholder="Search By Project Name..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-brown hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-brown font-medium rounded-lg text-sm px-4 py-2   "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full justify-start px-20 flex-col py-10">
        <Image
          src="/construction.jpg"
          className=" w-full"
          alt="logo"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default Tour;
