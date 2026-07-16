import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ADMIN_PATH, AUTH_PATH, RESET_PASSWORD_PATH } from "@/lib/adminRoutes";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Pais from "./pages/Pais";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";
import Noticias from "./pages/Noticias";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";
import Doacoes from "./pages/Doacoes";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import ResetPassword from "./pages/ResetPassword";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RedirectLegacyNewsPost() {
  const { id } = useParams();
  return <Navigate to={`/noticias/${id ?? ""}`} replace />;
}

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/pais" element={<Pais />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/categoria/:categorySlug" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
          <Route path="/noticia/:id" element={<RedirectLegacyNewsPost />} />
          <Route path="/doacoes" element={<Doacoes />} />

          <Route path={AUTH_PATH} element={<Auth />} />
          <Route path={RESET_PASSWORD_PATH} element={<ResetPassword />} />
          <Route path={ADMIN_PATH} element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
