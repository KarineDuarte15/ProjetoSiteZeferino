// src/components/layout/WhatsAppButton.tsx

import { Phone } from 'lucide-react'
import { Button } from '../button'

// Importe o número de WhatsApp das suas respostas do formulário
const WHATSAPP_NUMBER = "5585992265756";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Visitei seu site e gostaria de mais informações.`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      >
        <span className="sr-only">Entrar em contato via WhatsApp</span>
        <Phone className="h-7 w-7" />
      </Button>
    </a>
  )
}