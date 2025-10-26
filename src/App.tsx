// src/App.tsx
import { Header } from './components/ui/layout/Header'
import { WhatsAppButton } from './components/ui/layout/WhatsAppButton'

function App() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* 1. Adicionamos o Header no topo */}
      <Header />

      {/* 2. Conteúdo de teste (vamos substituir isso em breve) */}
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary">
          Olá, Zeferino Imóveis!
        </h1>
        <h2 className="text-lg text-secondary">
          (Teste das Cores da Marca)
        </h2>
        
        {/* Adicionando conteúdo extra para testar o scroll e o header 'sticky' */}
        <div className="h-[200vh] pt-10">
          <p>Role para baixo para ver o efeito "sticky" do header.</p>
        </div>
      </div>

      {/* 3. Botão flutuante */}
      <WhatsAppButton /> 
    </main>
  )
}

export default App