import Logo from '@/assets/images/logo.png';
import Image from "next/image";
import Link from 'next/link';
import { BsFacebook, BsInstagram } from "react-icons/bs";
const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/solidosolar/",
      icon: <BsFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/solidosolar/",
      icon: <BsInstagram />,
    },
  ];

  return (
    <footer className="bg-white text-gray-100 border-2 p-4 flex items-center justify-between">
      <div className="text-gray-500 text-xs flex flex-col gap-1 ">
        <Image src={Logo} width={164} height={98} alt="Solido Solar" />
        <p>CNPJ: 00.000.000/0001-00</p>
        <p> © 2023 - Todos direitos reservados </p>
      </div>

      <div className="text-gray-400">
        <ul className="flex gap-20 items-center cursor-pointer pr-32">
          {socialMediaLinks.map((item, key) => (
            <Link key={key} href={item.url} target='_blank'>
              <li  className="flex gap-8 text-3xl items-center hover:text-gray-700">
                {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
