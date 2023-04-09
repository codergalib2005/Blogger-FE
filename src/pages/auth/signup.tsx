import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';

import Button from '@/components/button';
import Input from '@/components/input';
import NavLink from '@/components/link';

const Signup = () => {
  const text = "Don't have an account?";
  return (
    <div className="h-screen">
      <div className="grid h-full grid-cols-2 items-center px-4">
        <div>
          <h2 className="text-4xl font-bold">Welcome back</h2>
          <p className="mb-4 text-gray-500">
            Welcome back! Please enter your details
          </p>
          <Input
            labelClass="block pt-4"
            inputClass="mt-1 block w-full max-w-[350px] py-2 px-4 rounded"
            placeholder="hi@example.com"
            type="text"
            title="Email"
          />
          <Input
            labelClass="block pt-4"
            inputClass="mt-1 block w-full max-w-[350px] py-2 px-4 rounded"
            placeholder="********"
            type="text"
            title="Password"
          />
          <Button className="mt-2 flex w-full max-w-[350px] items-center justify-center gap-2 bg-[#7065F0]">
            Login
          </Button>
          <Button className=" mt-2 flex w-full max-w-[350px] items-center justify-center gap-2 bg-[#7065F0]">
            <FcGoogle /> Continue with Google
          </Button>
          <p className="justifty-center mt-2 flex w-full max-w-[350px] gap-1 text-center">
            {text}
            <NavLink className="text-red-400" href="/">
              Sign up for free
            </NavLink>
          </p>
        </div>
        <div>
          <div>
            <div className="relative">
              <Image
                layout="fill"
                src="/assets/images/light-sea.jpg"
                alt="Light image with house and sea"
              />
            </div>
            <div>
              <h3>Beverly Springfield</h3>
              <p>2021 Sevilla, Palm Harbor. TX</p>
              <div>
                <div>Rent Sale $2,700/month</div>
                <button>@ Apply Now </button>
              </div>
            </div>
          </div>
          <div>
            <h4>Powered by @</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              totam reprehenderit nisi molestias aperiam, nobis corporis labore
              ea saepe fuga!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
