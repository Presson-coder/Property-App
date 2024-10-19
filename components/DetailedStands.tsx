import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";


const DetailedStands = () => {
  return (
    <div className="pb-14">
      <div className="p-20 hover:animate-pulse">
        <div className="flex p-4 rounded-2xl  text-black bg-gray-300 w-full">
          <div className="flex">
            <Image
              src="/construction.jpg"
              className="rounded-t-lg p-3 w-full"
              alt="logo"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full p-4 flex flex-col gap-14 justify-between">
            <div className="h-3 w-full flex justify-center ">
              <span className="bg-brown h-full w-16"></span>
              <span className="bg-gray-200 h-full w-12"></span>
              <span className="bg-zinc-500 h-full w-8"></span>
            </div>
            <div className="flex flex-col font-normal">
              <span className="flex">
                <p>Size </p> <p>: 3-bedroom semi-detached cluster units</p>{" "}
              </span>
              <span className="flex">
                <p>Option 1 </p>{" "}
                <p>
                  : Selling price: US$125,000.00 (payable over six (6) months)
                </p>{" "}
              </span>
              <span className="flex">
                <p>Option 2 </p> <p>: Selling price: US$146,700</p>{" "}
              </span>
              <span className="flex">
                <p>Deposit </p> <p>: 30% (payable in three (3)months)</p>{" "}
              </span>
              <span className="flex">
                <p>Tenure on balance </p> <p>: 36 months</p>{" "}
              </span>
              <span className="flex">
                <p>Interest </p> <p>: 15% per annum</p>{" "}
              </span>
            </div>
            <span className="w-full justify-center flex">
              <Button className="bg-brown">APPLY</Button>
            </span>
            <div className="flex w-full justify-end">
              <span className="loading loading-bars text-yellow-600"></span>
            </div>
          </div>
        </div>
      </div>

      {/* number 2 */}
      <div className="px-20 hover:animate-pulse">
        <div className="flex p-4 rounded-2xl  text-black bg-gray-300 w-full">
          <div className="flex">
            <Image
              src="/construction.jpg"
              className="rounded-t-lg p-3 w-full"
              alt="logo"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full p-4 flex flex-col gap-14 justify-between">
            <div className="h-3 w-full flex justify-center ">
              <span className="bg-brown h-full w-16"></span>
              <span className="bg-gray-200 h-full w-12"></span>
              <span className="bg-zinc-500 h-full w-8"></span>
            </div>
            <div className="flex flex-col font-normal">
              <span className="flex">
                <p>Size </p> <p>: 3-bedroom semi-detached cluster units</p>{" "}
              </span>
              <span className="flex">
                <p>Option 1 </p>{" "}
                <p>
                  : Selling price: US$125,000.00 (payable over six (6) months)
                </p>{" "}
              </span>
              <span className="flex">
                <p>Option 2 </p> <p>: Selling price: US$146,700</p>{" "}
              </span>
              <span className="flex">
                <p>Deposit </p> <p>: 30% (payable in three (3)months)</p>{" "}
              </span>
              <span className="flex">
                <p>Tenure on balance </p> <p>: 36 months</p>{" "}
              </span>
              <span className="flex">
                <p>Interest </p> <p>: 15% per annum</p>{" "}
              </span>
            </div>
            <span className="w-full justify-center flex">
              <Button className="bg-brown">APPLY</Button>
            </span>
            <div className="flex w-full justify-end">
              <span className="loading loading-bars text-yellow-600"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedStands
