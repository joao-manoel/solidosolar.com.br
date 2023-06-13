import { TypeProps } from "@/components/WidgetsWhatsapp"

export const phoneNumber = '65992194096'

export const CREATE_MESSAGE = (type: TypeProps) => {
  let message

  if (type === 'orcamento') {
    message = 'Olá, gostaria de fazer um orçamento!'  
  }
  else if (type === 'duvida') {
    message = 'Olá, gostaria de tirar algumas duvidas!'
  }
  else if (type === 'outro') {
    message = 'Olá, Solido Solar!'
  }

  return message
}

export const HandleLinkWhatsapp = (type: TypeProps) => {
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${CREATE_MESSAGE(type)}`, '_blank')
}