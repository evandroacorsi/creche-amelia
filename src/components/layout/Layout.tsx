import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

// --- LAYOUT CONDICIONAL (igual ao seu projeto anterior) ---
const Layout = ({ children }: LayoutProps) => {
  // Rotas onde Header e Footer NÃO devem aparecer
  const hiddenRoutes = ["/auth", "/admin"];

  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      <div className="min-h-screen flex flex-col">

        {!hideLayout && <Header />}

        <main className="flex-1">{children}</main>

        {!hideLayout && <Footer />}
        {!hideLayout && <WhatsAppButton />}
      </div>

    </>
  );
};

export default Layout;
