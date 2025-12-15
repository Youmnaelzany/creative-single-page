'use client';

import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from './ui/button';

// Dynamically import Sheet components
const Sheet = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.Sheet));
const SheetContent = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetContent));
const SheetHeader = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetHeader));
const SheetTitle = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetTitle));
const SheetTrigger = dynamic(() => import('@/components/ui/sheet').then((mod) => mod.SheetTrigger));

const menuItems = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Service' },
  { href: '/', label: 'Projects' },
];

const MobileMenu = () => {
  return (
    <div className="pt-2 pr-6 md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 cursor-pointer text-black" />
        </SheetTrigger>
        <SheetContent className="bg-[#191921] py-16">
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <div className="flex flex-col items-center justify-center gap-8">
              <ul className="flex flex-col items-center justify-center gap-8">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className="cursor-pointer text-[0.9375rem] leading-8 font-bold tracking-normal text-white opacity-80 transition-all duration-700 ease-in hover:opacity-100 lg:text-base"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                className="h-[65px] w-[199px] cursor-pointer rounded-none bg-[#F94F4F] text-lg leading-8 font-extrabold tracking-normal text-white transition-colors duration-700 ease-in hover:bg-[#434356]"
              >
                Schedule a call
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
