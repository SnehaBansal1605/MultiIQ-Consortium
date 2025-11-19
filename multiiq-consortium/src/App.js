import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyDetails from "./pages/PropertyDetails";
import { InvestorFormProvider } from "./contexts/InvestorFormContext";
import InvestorFormModal from "./components/InvestorFormModal";
import Resources from "./pages/Resources";
import AllProperties from "./pages/AllProperties";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <InvestorFormProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <InvestorFormModal />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/properties" element={<AllProperties />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </InvestorFormProvider>
    </QueryClientProvider>
  );
};

export default App;
