// src/App.tsx
import { Header } from './components/ui/layout/Header'
import { WhatsAppButton } from './components/ui/layout/WhatsAppButton'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      
      <Header />
      <Hero />
      <WhatsAppButton /> 
    </main>
  )
}

export default App