import Link from 'next/link';
import { SiIledefrancemobilites } from 'react-icons/si';

import NavLink from './link';

export default function Post({ item }: any) {
  return (
    <NavLink href={`/?tab=${item + 1}`}>
      <div className="h-48 rounded-md border-indigo-600 bg-[#242D3C] p-2 shadow-md hover:border-2 md:h-44 ">
        <div className="col-span-1  mx-3  ">
          <div className="flex justify-start">
            <SiIledefrancemobilites className=" h-8 w-8" />
          </div>
        </div>
        <div className="col-span-2 my-3">
          <div className="">
            <strong className="text-base text-red-400">
              Fully Customizable
            </strong>
            <h2 className="mb-2 text-base font-medium">
              No core utilities, all functionalities are provide via presets.
            </h2>
            <Link href="/" className="text-lg no-underline">
              Getting Started
            </Link>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
