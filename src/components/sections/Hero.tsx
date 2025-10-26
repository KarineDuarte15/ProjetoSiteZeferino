// src/components/sections/Hero.tsx

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import heroCentralPng from '../../assets/hero-central.png';
import heroBackgroundGif from '../../assets/hero-background.gif';

type FilterType = 'Comprar' | 'Repasse' | 'Lancamento'

export function Hero() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Comprar')

  return (
    // 1. Container da Seção com Imagem de Fundo
    <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center overflow-hidden py-16 md:py-24">

      {/* 3. Fundo (agora um GIF) */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src={heroBackgroundGif} // <-- USANDO O GIF
          alt="Zeferino Imóveis background"
          className="h-full w-full object-cover"
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 4. Conteúdo Centralizado (Slogan + Logo) */}
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-6">

        {/* 5. Novo Slogan (do exemplo) */}
        <h1 className="text-4xl font-bold tracking-tight text-brand-light md:text-5xl">
          A exclusividade que você procura no Eusébio.
        </h1>

        {/* 6. Logo Central (hero-central.png) */}
        <img
          src={heroCentralPng}
          alt="Zeferino Imóveis - Logo Completo"
          className="mx-auto mt-12 h-24 w-auto drop-shadow-lg md:h-32"
        />
      </div>

      {/* 3. Conteúdo Centralizado (Título + Caixa de Filtros) */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* 4. Título (Agora com texto claro) */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-light md:text-5xl">
            Encontre seu imóvel para
            <TypeAnimation
              sequence={[
                ' Comprar',
                2000,
                ' Repassar',
                2000,
                ' Lançamento',
                2000,
              ]}
              wrapper="span"
              speed={50}
              // A cor secundária (Dourado) fica ótima aqui
              className="ml-2 inline-block text-secondary"
              repeat={Infinity}
            />
          </h1>
          <p className="mt-4 text-lg text-brand-light/90 md:text-xl">
            A exclusividade e o alto padrão que você procura,
            <br />
            com um atendimento que transforma.
          </p>
        </div>

        {/* 5. Caixa de Filtros (Card Branco) */}
        <div className="mx-auto mt-12 max-w-5xl rounded-lg border bg-card p-6 shadow-lg">
          
          {/* 5a. Botões DENTRO do Card */}
          <div className="flex justify-start gap-2">
            <Button
              size="lg"
              variant={activeFilter === 'Comprar' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('Comprar')}
              className="w-32 text-lg"
            >
              Comprar
            </Button>
            <Button
              size="lg"
              variant={activeFilter === 'Repasse' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('Repasse')}
              className="w-32 text-lg"
            >
              Repasse
            </Button>
            <Button
              size="lg"
              variant={activeFilter === 'Lancamento' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('Lancamento')}
              className="w-32 text-lg"
            >
              Lançamento
            </Button>
          </div>

          {/* 5b. Grid de Filtros (Layout do Protótipo) */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5 md:items-end">
            
            {/* Input (Ocupando 2 colunas) */}
            <div>
              <label htmlFor="cidade" className="mb-2 block text-sm font-medium text-foreground/80">
                Cidade
              </label>
              <Select>
                <SelectTrigger id="cidade" className="h-12">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fortaleza">Fortaleza</SelectItem>
                  <SelectItem value="Caucaia">Caucaia</SelectItem>
                </SelectContent>
              </Select>
            </div>


            
            <div>
              <label htmlFor="bairro" className="mb-2 block text-sm font-medium text-foreground/80">
                Bairro
              </label>
              <Select>
                <SelectTrigger id="bairro" className="h-12">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Siqueira">Siqueira</SelectItem>
                  <SelectItem value="Meireles">Meireles</SelectItem>
                  <SelectItem value="Aldeota">Aldeota</SelectItem>
                  <SelectItem value="Varjota">Varjota</SelectItem>

                </SelectContent>
              </Select>
            </div>

            {/* Select: Cidade */}
            <div>
              <label htmlFor="tipo" className="mb-2 block text-sm font-medium text-foreground/80">
                Tipo de Imóvel
              </label>
              <Select>
                <SelectTrigger id="tipo" className="h-12">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eusebio">Casa</SelectItem>
                  <SelectItem value="fortaleza">Apartamento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Botão Buscar */}
            <div>
              <Button size="lg" className="h-12 w-full">
                <Search className="mr-2 h-5 w-5" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}