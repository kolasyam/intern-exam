"use client";
import { FaEdit } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrLinkPrevious } from "react-icons/gr";
import Image from "next/image";
import client from "/images/client.png";
import Sidebar from "@/Components/SideBar";
import Link from "next/link";

const ClientDetails = () => {
  return (
    <div className="relative flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-gray-100 p-4 border-b flex items-center justify-between">
          {/* Back Button */}
          <Link href="/ClientSignIn" className="text-gray-600 border border-gray-300 p-2 rounded-md">
            <GrLinkPrevious size={35} />
            
          </Link>
          {/* Notification Icon */}
          <button className="text-gray-500 border border-gray-300 p-2 rounded-md">
            <IoNotificationsOutline size={35} />
          </button>
        </header>
        <h4 className="p-6 text-3xl font-medium text-gray-600">
          Client Details
        </h4>
        {/*Image*/ }
        <div className="pl-6 ml-4 relative top-14 z-10">
          <div className="w-[171.43px] h-[171.43px] rounded-full border-4 border-[#f87171] bg-white flex justify-center items-center">
            <Image
              src={client}
              alt="Profile"
              className="rounded-full object-cover"
              width={171.43}
              height={170.91}
            />
          </div>
        </div>
        <main className="p-6">
            {/*details */}
          <div className="bg-white shadow-md rounded-lg pl-5 pr-5 pb-5 relative">
            <div className="flex items-center justify-between mb-4">
              <button className="ml-auto flex gap-1 p-2 border border-red-400 rounded-md text-red-400">
                <FaEdit size={18} />
                <span>Edit</span>
              </button>
            </div>
            <div className="flex flex-col items-start mt-6 space-y-4">
              <div className="flex flex-row items-center gap-4 text-center">
                <h3 className="text-xl text-gray-600 font-semibold pr-20">
                  Ananya Raj
                </h3>
                <p className="text-gray-500 pl-7">ID: A1234865</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-md rounded-lg p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-medium text-gray-600">
                Client Profile
              </h4>
              <button className="flex items-center gap-1 p-2 border border-red-400 rounded-md text-red-400">
                <FaEdit size={18} />
                <span>Edit</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium text-gray-600">+91 9999999999</p>
              </div>
              <div>
                <p className="text-gray-600">Event Date</p>
                <p className="font-medium text-gray-600">May 28th 2024</p>
              </div>
              <div>
                <p className="text-gray-600">Sample Date</p>
                <p className="font-medium text-gray-600">May 23rd 2024</p>
              </div>
              <div>
                <p className="text-gray-600">Pincode</p>
                <p className="font-medium text-gray-600">560001</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDetails;
