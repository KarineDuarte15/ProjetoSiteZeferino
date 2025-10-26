import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import logoHeaderPng from '../../../assets/logoheader.png';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#imoveis', label: 'Imóveis' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo + nome */}
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logoHeaderPng} // <-- MUDANÇA
            alt="Chave Zeferino"
            className="h-1 w-auto"
          />
          <span className="text-2xl font-bold text-[#6b0504] tracking-tight font-serif">
            Zeferino
          </span>
        </a>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-zinc-700 font-medium hover:text-[var(--color-brand-light)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="ml-4 bg-[var(--color-brand-primary)] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#99423d] transition-all">
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>
        {/* Mobile nav */}
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
                <SheetTitle className="text-left text-[#6b0504] font-serif">Zeferino</SheetTitle>
                <SheetDescription className="text-left text-zinc-700">
                  IMÓVEIS
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-zinc-700 hover:text-[#6b0504]"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="lg" className="mt-4 bg-[#6b0504] text-white">
                  <a href="#contato">Fale Conosco</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
