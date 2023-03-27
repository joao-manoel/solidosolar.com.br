import { Button, Navbar } from "flowbite-react";


export const Header = () => {
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="./images/logo.png"
      className="mr-3 h-9 sm:h-16"
      alt="Flowbite Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="bg-green-400 hover:bg-green-500">
      Faça Seu Orçamento
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="#"
      active={false}
      className="hover:bg-green-500"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="#">
      Sobre Nós
    </Navbar.Link>
    <Navbar.Link href="#">
      Orçamento
    </Navbar.Link>
    <Navbar.Link href="#">
      Serviços
    </Navbar.Link>
    <Navbar.Link href="#">
      Contato
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}