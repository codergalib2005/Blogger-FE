import Image from 'next/image';

import NavLink from './Link';

export default function Post({ item }: any) {
  return (
    <NavLink href={`/?tab=${item + 1}`}>
      <div className="grid h-28 grid-cols-3 rounded-md bg-[#242D3C] p-2">
        <div className="col-span-1 flex items-center justify-center">
          <div className="relative h-20 w-20">
            <Image
              layout="fill"
              src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F432%2F520%2Fthumb%2FEGH_React_Mobx_TS.png&w=256&q=100"
            />
          </div>
        </div>
        <div className="col-span-2">
          <strong className="text-xs text-red-400">COURSE</strong>
          <h2 className="font-medium">
            Develop React Applications with Mobx and TypeScript
          </h2>
        </div>
      </div>
    </NavLink>
  );
}
