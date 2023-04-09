/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaApple,FaFacebookF } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    
  };
  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className=" grid justify-center pb-12">
        <div className="mt-20 mb-6 flex justify-center md:mt-28 md:mb-12">
          <div className="w-10/12 md:w-8/12   ">
            <h2 className="text-center text-5xl font-bold">
              Login to Your Account
            </h2>
            <h6 className="my-2 text-center text-2xl">
              Choose from 14.000 online video coursed with new additions
              published every second month
            </h6>
          </div>
        </div>

        <div className="justify-center  gap-4   md:flex">
          <div className="mb-2 grid justify-center md:mb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="shadow-[5px 2px 5px 4px]  w-[280px] rounded-md border-none border-gray-600 bg-gray-800 p-2 text-base text-white shadow-black focus:outline-2 md:w-[350px]"
                {...register("brand", { required: true, maxLength: 20 })}
                placeholder="Brand / Influencer"
              />
              <br />
              <input
                className="shadow-[5px 2px 5px 4px] my-2  w-[280px] rounded-md border-none border-gray-600 bg-gray-800 p-2 text-base text-white shadow-black focus:outline-2 md:w-[350px]"
                {...register("pin", {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                })}
                placeholder="8 Digit Pin"
              />
              <br />
              <input
                className="w-[280px] cursor-pointer rounded border border-blue-500 bg-gradient-to-r from-green-400 to-yellow-200 py-2 px-4 font-semibold text-black hover:border-transparent hover:bg-blue-500   md:w-[350px]"
                type="submit"
                value="Login to Your Account             	&#8594;"
              />
            </form>
          </div>

          <div className="grid justify-center">
            <div>
              <button>
                {" "}
                <div className="   rounded-md bg-gradient-to-r from-green-500 to-yellow-500 p-[1px]">
                  <div className="  w-[280px]  rounded-md   bg-gray-800 p-2 text-base text-white  hover:bg-gray-900   md:w-[350px] ">
                    <h1 className="flex items-center justify-start gap-4 text-base  text-white">
                      <AiOutlineGoogle />
                      Sign in with Google
                    </h1>
                  </div>
                </div>
              </button>
              <br />
              <button>
                {" "}
                <div className=" my-2 rounded-md bg-gradient-to-r from-yellow-500 to-green-500 p-[1px]">
                  <div className="  w-[280px]   rounded-md   bg-gray-800 p-2 text-base text-white  hover:bg-gray-900   md:w-[350px] ">
                    <h1 className="flex items-center justify-start gap-4 text-base  text-white">
                      <FaFacebookF /> Sign in with Facebook
                    </h1>
                  </div>
                </div>
              </button>
              <br />
              <button>
                {" "}
                <div className="   rounded-md bg-gradient-to-r from-green-500 to-yellow-500 p-[1px]">
                  <div className="  w-[280px]   rounded-md   bg-gray-800 p-2 text-base text-white  hover:bg-gray-900   md:w-[350px] ">
                    <h1 className="flex items-center justify-start gap-4 text-base  text-white">
                      <FaApple /> Sign in with Apple Account
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="my-8 md:my-12">
          <p className=" text-center text-base font-medium text-white underline">
            <Link href="/">Forgot Password?</Link>
          </p>
          <p className=" text-center text-base font-medium text-white ">
            If are you a new user?
            <Link href="/"> Signup</Link>
          </p>
        </div>
        <div className="justify-between px-2 md:flex">
          <p className="text-center text-base font-normal">Suppory/Privacy Policy</p>
          <p className="text-center text-base font-normal">
            Copyright@Team unique gamers 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
