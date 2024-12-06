import Image from "next/image";
import Link from "next/link";
import logo from "/images/logo.png";
import signin from '/images/signin.jpeg'
const Signup = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Section with Image - Hidden on Small Screens */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full hidden md:block">
        <Image
          src={signin}
          alt="Signup"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="Logo" />
          </div>

          {/* Form Header */}
          <h1 className="text-black text-center text-2xl font-bold mb-2">
            Sign In
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Welcome back! please enter your details
          </p>

          {/* Form */}
          <form className="space-y-4">
            {/* Mobile Number Input */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Input"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#fda4af] text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Back Link */}
          <div className="flex flex-row justify-between">
            <p className="text-gray-800 mt-4">If new to this website</p>
            <p className="text-sm text-gray-500 mt-4 text-center">
              <Link href="/ClientSignUp" className="text-[#fb7185] hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
