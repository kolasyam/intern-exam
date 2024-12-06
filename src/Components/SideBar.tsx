// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
// import { FiUsers } from "react-icons/fi";
// import Image from "next/image";
// import logo from "/images/logo.png";
// import ravi from "/images/ravikumar.jpeg";
// // import { BiLogOut } from "react-icons/bi";
// import { IoIosLogOut } from "react-icons/io";
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState("Home");

//   const handleActive = (item: string) => {
//     setActive(item);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden p-3 text-gray-700 mt-3"
//       >
//         <FaBars size={24} />
//       </button>

//       {/* Sidebar */}
//       {/* <aside
//         className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform flex flex-col justify-between ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:relative md:w-64 ${
//           isOpen ? "w-[250px]" : "w-[200px]"
//         }`}
//       > */}
//       <aside
//         className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform flex flex-col justify-between ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:relative md:w-64 ${
//           isOpen ? "w-[250px]" : "w-[200px]"
//         }`}
//       >
//         <div>
//           <div className="absolute top-[19px] left-[19px]">
//             <Image src={logo} alt="logo" width={202} height={45.11} />
//           </div>

//           {/* Profile Section */}
//           <div className="mt-[100px] flex flex-col items-center gap-3 p-4 w-full">
//             <div className="w-[64px] h-[64px] rounded-full">
//               <Image
//                 src={ravi}
//                 alt="Ravi Kumar"
//                 width={60}
//                 height={60}
//                 className="rounded-full object-cover"
//               />
//             </div>
//             <div className="pt-2">
//               <p className="text-sm font-medium text-black">Ravi Kumar</p>
//               <p className="text-xs text-center text-gray-500">CRE</p>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="mt-4 space-y-2 w-full px-4">
//             <a
//               href="#"
//               onClick={() => handleActive("Home")}
//               className={`flex items-center p-2 rounded-lg transition-colors ${
//                 active === "Home" ? "text-white" : "text-black"
//               }`}
//               style={{
//                 backgroundColor:
//                   active === "Home" ? "rgba(175, 121, 116, 1)" : "transparent",
//               }}
//             >
//               <AiOutlineHome size={20} className="mr-2" />
//               Home
//             </a>
//             <a
//               href="#"
//               onClick={() => handleActive("Employees")}
//               className={`flex items-center p-2 rounded-lg transition-colors ${
//                 active === "Employees" ? "text-white" : "text-black"
//               }`}
//               style={{
//                 backgroundColor:
//                   active === "Employees"
//                     ? "rgba(175, 121, 116, 1)"
//                     : "transparent",
//               }}
//             >
//               <FiUsers size={20} className="mr-2" />
//               Employees
//             </a>
//             <a
//               href="#"
//               onClick={() => handleActive("Settings")}
//               className={`flex items-center p-2 rounded-lg transition-colors ${
//                 active === "Settings" ? "text-white" : "text-black"
//               }`}
//               style={{
//                 backgroundColor:
//                   active === "Settings"
//                     ? "rgba(175, 121, 116, 1)"
//                     : "transparent",
//               }}
//             >
//               <AiOutlineSetting size={20} className="mr-2" />
//               Settings
//             </a>
//           </nav>
//         </div>

//         {/* Logout Button */}
//         <div className="w-full p-4">
//           <button className="flex items-center justify-center p-3 rounded-lg text-[#f87171] hover:bg-[rgba(175,121,116,1)] hover:text-white transition-colors w-full">
//             <IoIosLogOut size={20} className="mr-2" />
//             Logout
//           </button>
//         </div>
//       </aside>
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Image from "next/image";
import logo from "/images/logo.png";
import ravi from "/images/ravikumar.jpeg";
// import { BiLogOut } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state for small screens
  const [active, setActive] = useState("Home");

  const handleActive = (item: string) => {
    setActive(item);
  };

  return (
    <div className="relative">
      {/* FaBars button - visible only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-gray-700 mt-3"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform flex flex-col justify-between 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64 ${
          isOpen ? "w-[250px]" : "w-[200px]"
        }`}
      >
        <div>
          {/* Logo Section */}
          <div className="absolute top-[19px] left-[19px]">
            <Image src={logo} alt="logo" width={202} height={45.11} />
          </div>

          {/* Profile Section */}
          <div className="mt-[100px] flex flex-col items-center gap-3 p-4 w-full">
            <div className="w-[64px] h-[64px] rounded-full">
              <Image
                src={ravi}
                alt="Ravi Kumar"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>
            <div className="pt-2">
              <p className="text-sm font-medium text-black">Ravi Kumar</p>
              <p className="text-xs text-center text-gray-500">CRE</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-4 space-y-2 w-full px-4">
            <a
              href="#"
              onClick={() => handleActive("Home")}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                active === "Home" ? "text-white" : "text-black"
              }`}
              style={{
                backgroundColor:
                  active === "Home" ? "rgba(175, 121, 116, 1)" : "transparent",
              }}
            >
              <AiOutlineHome size={20} className="mr-2" />
              Home
            </a>
            <a
              href="#"
              onClick={() => handleActive("Employees")}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                active === "Employees" ? "text-white" : "text-black"
              }`}
              style={{
                backgroundColor:
                  active === "Employees"
                    ? "rgba(175, 121, 116, 1)"
                    : "transparent",
              }}
            >
              <FiUsers size={20} className="mr-2" />
              Employees
            </a>
            <a
              href="#"
              onClick={() => handleActive("Settings")}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                active === "Settings" ? "text-white" : "text-black"
              }`}
              style={{
                backgroundColor:
                  active === "Settings"
                    ? "rgba(175, 121, 116, 1)"
                    : "transparent",
              }}
            >
              <AiOutlineSetting size={20} className="mr-2" />
              Settings
            </a>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="w-full p-4">
          <button className="flex items-center justify-center p-3 rounded-lg text-[#f87171] hover:bg-[rgba(175,121,116,1)] hover:text-white transition-colors w-full">
            <IoIosLogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Backdrop for small screens */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
