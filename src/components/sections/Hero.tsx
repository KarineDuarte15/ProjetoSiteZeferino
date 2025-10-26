// src/components/sections/Hero.tsx

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TypeAnimation } from 'react-type-animation'

// 1. Definimos um tipo para o nosso estado do filtro
type FilterType = 'comprar' | 'repasse'

export function Hero() {
  // 2. Criamos o estado para controlar o filtro ativo
  // O valor inicial será 'comprar'
  const [activeFilter, setActiveFilter] = useState<FilterType>('comprar')

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      {/* 3. Bloco do Título */}
      <div className="mx-auto max-w-4xl text-center">
        
        {/* 4. Título com Animação de Digitação (react-type-animation) */}
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Encontre seu imóvel para
          <TypeAnimation
            sequence={[
              ' Comprar', // Texto 1
              2000,       // Espera 2s
              ' Repassar', // Texto 2 (substituindo "Alugar")
              2000,       // Espera 2s
            ]}
            wrapper="span"
            speed={50}
            className="ml-2 inline-block text-secondary"
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 text-lg text-foreground/80 md:text-xl">
          A exclusividade e o alto padrão que você procura,
          <br />
          com um atendimento que transforma.
        </p>
      </div>

      {/* 5. Bloco de Filtros */}
      <div className="mt-12">
        {/* 5a. Botões de Ação (Comprar / Repasse) */}
        <div className="flex justify-center gap-2">
          <Button
            size="lg"
            // Lógica de transição de cor:
            // Se activeFilter for 'comprar', usa o variant 'default' (Vinho)
            // Senão, usa o 'outline' (transparente com borda)
            variant={activeFilter === 'comprar' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('comprar')}
            className="w-32 text-lg"
          >
            Comprar
          </Button>
          <Button
            size="lg"
            variant={activeFilter === 'repasse' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('repasse')}
            className="w-32 text-lg"
          >
            Repasse
          </Button>
        </div>

        {/* 5b. Filtros de Busca (Input e Selects) */}
        <div className="mt-6 grid grid-cols-1 gap-4 rounded-lg border bg-card p-6 shadow-lg md:grid-cols-4 md:items-end">
          
          {/* Pesquisa por Texto */}
          <div className="md:col-span-4">
            <label htmlFor="search" className="mb-2 block text-sm font-medium text-foreground/80">
              O que você procura?
            </label>
            <Input
              id="search"
              placeholder="Digite o nome do empreendimento ou local..."
              className="h-12"
            />
          </div>

          {/* Select: Tipo */}
          <div>
            <label htmlFor="tipo" className="mb-2 block text-sm font-medium text-foreground/80">
              Tipo de Imóvel
            </label>
            <Select>
              <SelectTrigger id="tipo" className="h-12">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select: Cidade */}
          <div>
            <label htmlFor="cidade" className="mb-2 block text-sm font-medium text-foreground/80">
              Cidade
            </label>
            <Select>
              <SelectTrigger id="cidade" className="h-12">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {/* A cliente foca em Eusébio */}
                <SelectItem value="eusebio">Eusébio</SelectItem> 
                <SelectItem value="fortaleza">Fortaleza</SelectItem>
                <SelectItem value="aquiraz">Aquiraz</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select: Bairro (Exemplo) */}
          <div>
            <label htmlFor="bairro" className="mb-2 block text-sm font-medium text-foreground/80">
              Bairro
            </label>
            <Select disabled> {/* Desabilitado por enquanto */}
              <SelectTrigger id="bairro" className="h-12">
                <SelectValue placeholder="Selecione a cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="centro">Centro</SelectItem>
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
    </section>
  )
}