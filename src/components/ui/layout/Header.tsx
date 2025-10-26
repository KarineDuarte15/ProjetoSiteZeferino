import { Menu } from 'lucide-react'
import { Button } from '@/components/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'

// 1. Definição dos links de navegação
const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#imoveis', label: 'Imóveis' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  return (
    // 2. Container do Header
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        
        {/* 3. Logo */}
        <a href="/" className="flex items-center gap-2">
          {/* Usando o nome da marca com as cores e uma fonte sofisticada */}
          <span className="text-2xl font-bold tracking-tight text-primary">
            ZEFERINO
          </span>
          <span className="text-lg font-medium text-secondary">
            IMÓVEIS
          </span>
        </a>

        {/* 4. Navegação Desktop (escondida em telas pequenas) */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>

        {/* 5. Navegação Mobile (Sheet - visível apenas em telas pequenas) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">ZEFERINO</SheetTitle>
                <SheetDescription className="text-left text-secondary">
                  IMÓVEIS
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="lg" className="mt-4">
                  <a href="#contato">Fale Conosco</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}