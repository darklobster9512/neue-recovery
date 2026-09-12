import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPostCeoFraud from "./pages/BlogPostCeoFraud";
import BlogPostCeoFraud2 from "./pages/BlogPostCeoFraud2";
import BlogPostKreditgebuehr from "./pages/BlogPostKreditgebuehr";
import BlogPostGesellschaftsrecht from "./pages/BlogPostGesellschaftsrecht";
import BlogPostDatenschutz from "./pages/BlogPostDatenschutz";
import UnserePartner from "./pages/UnserePartner";
import BlogPostImmobilienrecht from "./pages/BlogPostImmobilienrecht";
import BlogPostPrivateClients from "./pages/BlogPostPrivateClients";
import BlogPostProzessfuehrung from "./pages/BlogPostProzessfuehrung";
import BlogPostWertpapier from "./pages/BlogPostWertpapier";
import BlogPostKryptonachverfolgung from "./pages/BlogPostKryptonachverfolgung";
import Kontakt from "./pages/Kontakt";
import Stellenangebote from "./pages/Stellenangebote";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Haftungsausschluss from "./pages/Haftungsausschluss";

import ScrollToTop from "./components/ScrollToTop";
import { SettingsProvider } from "./hooks/useSettings";

const queryClient = new QueryClient();

function AppContent() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/unsere-partner" element={<UnserePartner />} />
        <Route path="/stellenangebote" element={<Stellenangebote />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/haftungsausschluss" element={<Haftungsausschluss />} />

        <Route path="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" element={<BlogPost />} />
        <Route path="/blog-post/ceo-fraud-und-ueberweisungsbetrug" element={<BlogPostCeoFraud />} />
        <Route path="/kompetenz/immobilienrecht" element={<BlogPostImmobilienrecht />} />
        <Route path="/kompetenz/datenschutz-und-compliance" element={<BlogPostDatenschutz />} />
        <Route path="/kompetenz/gesellschafts-und-unternehmensrecht" element={<BlogPostGesellschaftsrecht />} />
        <Route path="/kompetenz/private-clients-family-offices" element={<BlogPostPrivateClients />} />
        <Route path="/kompetenz/prozessfuhrung" element={<BlogPostProzessfuehrung />} />
        <Route path="/kompetenz/wertpapier-und-kapitalmarktrecht" element={<BlogPostWertpapier />} />
        <Route path="/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis" element={<BlogPostKryptonachverfolgung />} />
        <Route path="/kompetenz/cybercrime" element={<BlogPostCeoFraud2 />} />
        <Route path="/blog-post/ogh-kreditgebuehr-unzulaessig" element={<BlogPostKreditgebuehr />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;
