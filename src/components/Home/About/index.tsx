import { HandleLinkWhatsapp, phoneNumber } from "@/utils/HandlerWhatsapp";
import Image from "next/image";
import { AiTwotonePhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { ContactButton } from "./ContactButton";

const AboutUs = () => {

  const HandlePhoneLink = () => {
    window.open(`tel:${phoneNumber}`)
  }

  return (
    <div id="about" className="relative bg-green-500 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none relative">
          <h2 className="outlineTextAboutTitle text-4xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-wide uppercase">
            Sobre Nós
          </h2>
          <h3 className="mt-[-10px] text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Sólido Solar
          </h3>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20  -mr-4 xl:-mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-green-400"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <svg
              className="hidden lg:block absolute bottom-0 left-0 -mb-10 -ml-7"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-green-400"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-sm drop-shadow-md"
                    src="/images/fachada.png"
                    alt="Painéis Solares"
                    width={1184}
                    height={792}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-700 font-bold">
                A Sólido Solar é uma empresa especializada em energia solar,
                oferecendo soluções sustentáveis e eficientes para pessoas e
                empresas. Com anos de experiência no mercado, nós somos
                comprometidos em fornecer as melhores opções em energia solar
                para nossos clientes.
              </p>
            </div>
            <div className="mt-5 prose prose-green text-gray-700 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Desde nossa fundação em 2019, temos fornecido sistemas solares
                para residências, condomínios, empresas e fazendas em todo o
                país. Nossa equipe é formada por especialistas em energia solar,
                desde engenheiros até técnicos de instalação, e estamos sempre
                atualizados com as últimas tecnologias em energia solar.
              </p>
              <p>
                Na Sólido Solar, acreditamos que a energia solar é a chave para
                um futuro sustentável e estamos empenhados em fazer nossa parte
                para tornar isso uma realidade. Se você está interessado em
                economizar dinheiro em sua conta de energia e ajudar a proteger
                o meio ambiente, entre em contato conosco para saber mais sobre
                nossos serviços de energia solar.
              </p>
            </div>
            <div className="flex gap-8">
              <ContactButton
                label="Ligue agora"
                Icon={AiTwotonePhone}
                onClick={() => HandlePhoneLink()}
                IconRotate={90}
              />
              <ContactButton
                label="Fale conosco"
                Icon={FaWhatsapp}
                IconRotate={0}
                onClick={() => HandleLinkWhatsapp('outro')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
