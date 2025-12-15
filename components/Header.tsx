'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import Wrapper from './Wrapper';

// Dynamically import MobileMenu with no SSR
const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false,
  loading: () => (
    <div className="pr-6 md:hidden">
      <div className="h-7 w-7" />
    </div>
  ),
});

const Header = () => {
  return (
    <header
      aria-label="Header"
      className="mx-auto flex max-w-360 items-center justify-between py-8 md:py-0"
    >
      <div className="pl-6 md:pl-10 lg:pl-16">
        <Link href="/" className="cursor-pointer" aria-label="Home">
          <Image
            src="/desktop/logo.svg"
            alt=""
            width={161}
            height={30}
            priority
            fetchPriority="high"
            className="h-auto w-auto"
            sizes="(max-width: 768px) 120px, 161px"
          />
        </Link>
      </div>
      {/* Navigation */}
      <div className="hidden h-[178px] items-center justify-center bg-[#F94F4F] md:flex md:w-[497px] lg:w-[705px]">
        <nav className="flex items-center justify-between gap-5 md:gap-10">
          <ul className="flex items-center gap-5 md:gap-10">
            <li className="cursor-pointer text-[0.9375rem] leading-8 font-bold tracking-normal text-white opacity-80 transition-all duration-700 ease-in hover:opacity-100 lg:text-base">
              <Link href="/">About</Link>
            </li>
            <li className="cursor-pointer text-[0.9375rem] leading-8 font-bold tracking-normal text-white opacity-80 transition-all duration-700 ease-in hover:opacity-100 lg:text-base">
              <Link href="/">Service</Link>
            </li>
            <li className="cursor-pointer text-[0.9375rem] leading-8 font-bold tracking-normal text-white opacity-80 transition-all duration-700 ease-in hover:opacity-100 lg:text-base">
              <Link href="/">Projects</Link>
            </li>
          </ul>
          <Button
            type="button"
            className="h-[65px] w-[147px] cursor-pointer rounded-none bg-[#191921] text-base leading-[auto] font-extrabold tracking-normal text-white transition-colors duration-700 ease-in hover:bg-[#434356]"
          >
            Schedule a call
          </Button>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
