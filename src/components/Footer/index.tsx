import { motion } from "framer-motion";
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
    <footer className="bg-gray-800 text-gray-100">
      <div className="container mx-auto flex justify-between items-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-bold text-lg">Sólido Solar</h2>
          <p className="mt-2 text-sm">Energia limpa e renovável</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ul className="flex items-center justify-center">
            {socialMediaLinks.map((link, index) => (
              <li key={index} className="mx-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition duration-300 ease-in-out"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sólido Solar. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
