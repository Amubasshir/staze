'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../../public/images/s-logo.svg';
const Logo = () => {
  const router = useRouter;
  return (
    <Image
      alt="logo"
      className="hidden cursor-pointer md:block "
      height="100"
      width="100"
      src={logo}
    />
  );
};

export default Logo;
