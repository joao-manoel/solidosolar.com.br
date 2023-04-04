import { TypeProps } from "@/components/WidgetsWhatsapp"

export const CREATE_MESSAGE = (type: TypeProps) => {
  let message

  if (type === 'orcamento') {
    message = 'Olá, gostaria de fazer um orçamento!'  
  }
  else if (type === 'duvida') {
    message = 'Olá, gostaria de algumas duvidas!'
  }
  else if (type === 'outro') {
    message = 'Olá, Solido Solar!'
  }

  return message
}