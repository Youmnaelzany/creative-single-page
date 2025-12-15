import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header  aria-label="Header" className="flex items-center justify-between max-w-360 mx-auto py-8 md:py-0">
      <div className="pl-6 md:pl-10 lg:pl-16">
        <Image src="/desktop/logo.svg" alt="Logo" width={161} height={30} />
      </div>
      {/* Navigation */}
      <div className="hidden md:flex h-[178px] bg-[#F94F4F] md:w-[497px] lg:w-[705px] items-center justify-center">
        <nav className="flex items-center justify-between md:gap-10 gap-5">
          <ul className="flex items-center md:gap-10 gap-5">
            <li className="text-white leading-8 tracking-normal font-bold text-[0.9375rem] lg:text-base  transition-all duration-700 ease-in cursor-pointer opacity-80 hover:opacity-100">
              <Link href="/">About</Link> 
            </li>
            <li className="text-white leading-8 tracking-normal font-bold text-[0.9375rem] lg:text-base  transition-all duration-700 ease-in cursor-pointer opacity-80 hover:opacity-100">
              <Link href="/">Service</Link>
            </li>
            <li className="text-white leading-8 tracking-normal font-bold text-[0.9375rem] lg:text-base  transition-all duration-700 ease-in cursor-pointer opacity-80 hover:opacity-100">
              <Link href="/">Projects</Link>
            </li>
          </ul>
          <Button type="button" className="text-white w-[147px] h-[65px] bg-[#191921]  font-extrabold tracking-normal leading-[auto] text-base cursor-pointer rounded-none hover:bg-[#434356] transition-colors ease-in duration-700">Schedule a call</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
