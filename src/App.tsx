import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Estrutura from "./pages/Estrutura";
import Pais from "./pages/Pais";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";
import Noticias from "./pages/Noticias";
import Doacoes from "./pages/Doacoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/pais" element={<Pais />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
