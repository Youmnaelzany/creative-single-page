import Image from 'next/image';
import { Button } from './ui/button';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label="Footer"
      className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between"
    >
      <h2 className="relative max-w-[398px] text-[2rem] leading-10 font-extrabold tracking-normal text-black lg:max-w-[635px] lg:text-[3.5rem] lg:leading-16">
        Let's build something great together.
      </h2>
      <Image
        src={'/desktop/bg-pattern-wave-red.svg'}
        alt="bg-pattern-wave-red"
        width={135}
        height={61}
        className="absolute -left-18 hidden lg:flex"
      />

      <Button
        type="button"
        className="h-[65px] w-[199px] cursor-pointer rounded-none bg-[#F94F4F] text-lg leading-8 font-extrabold tracking-normal text-white transition-colors duration-700 ease-in hover:bg-[#FF9393]"
      >
        Schedule a call
      </Button>
    </Wrapper>
  );
};
export default Footer;
