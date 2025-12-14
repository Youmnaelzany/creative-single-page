import Image from "next/image";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Wrapper as="header" aria-label="Header" className="">
      <div className="">
        <Image src="/desktop/logo.svg" alt="Logo" width={161} height={30} />
      </div>
    </Wrapper>
  );
};

export default Header;
