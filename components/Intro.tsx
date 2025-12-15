import Image from 'next/image';
import { Button } from './ui/button';
import Wrapper from './Wrapper';

const Intro = () => {
  return (
    <section
      aria-label="Intro"
      className="relative flex flex-col-reverse gap-14 overflow-hidden md:min-h-svh md:items-start md:gap-0"
    >
      {/* TEXT */}
      <div className="z-10 flex max-w-[427px] flex-col gap-10 px-6 md:absolute md:top-[10%] md:left-10 md:max-w-[498px] md:gap-12 md:px-0 lg:top-[30%] lg:left-16 lg:max-w-[590px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-[2.5rem] leading-10 font-extrabold tracking-normal text-black md:text-[3.5rem] md:leading-14 lg:text-[5rem] lg:leading-22">
            Branding & website design agency
          </h1>
          <p className="text-[0.9375rem] leading-6.25 font-normal tracking-normal text-black lg:text-lg">
            We specialize in visual storytelling by creating cohesive brand and website design
            solutions for small businesses, giving lasting impressions to audiences in a digital
            world.
          </p>
        </div>

        <Button
          type="button"
          className="h-[65px] w-[199px] cursor-pointer rounded-none bg-[#F94F4F] text-lg leading-8 font-extrabold tracking-normal text-white transition-colors duration-700 ease-in hover:bg-[#FF9393]"
        >
          Schedule a call
        </Button>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center md:absolute md:top-0 md:right-0">
        {/* Mobile */}
        <Image
          src="/mobile/image-hero.jpg"
          alt="Hero image"
          width={375}
          height={200}
          priority
          className="block w-full md:hidden"
        />

        {/* Tablet */}
        <Image
          src="/tablet/image-hero.jpg"
          alt="Hero image"
          width={438}
          height={606}
          className="hidden md:block lg:hidden"
        />

        {/* Desktop */}
        <Image
          src="/desktop/image-hero.jpg"
          alt="Hero image"
          width={895}
          height={800}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Intro;
