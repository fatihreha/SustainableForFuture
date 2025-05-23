import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Goals from "./pages/Goals";
import CarbonCalculator from "./pages/CarbonCalculator";
import ProductRecommender from "./pages/ProductRecommender";
import Goal1 from './pages/1';
import Goal2 from './pages/2';
import Goal3 from './pages/3';
import Goal4 from './pages/4';
import Goal5 from './pages/5';
import Goal6 from './pages/6';
import Goal7 from './pages/7';
import Goal8 from './pages/8';
import Goal9 from './pages/9';
import Goal10 from './pages/10';
import Goal11 from './pages/11';
import Goal12 from './pages/12';
import Goal13 from './pages/13';
import Goal14 from './pages/14';
import Goal15 from './pages/15';
import Goal16 from './pages/16';
import Goal17 from './pages/17';

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      {children}
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/goals" element={<Layout><Goals /></Layout>} />
          <Route path="/carbon-calculator" element={<Layout><CarbonCalculator /></Layout>} />
          <Route path="/product-recommender" element={<Layout><ProductRecommender /></Layout>} />
          <Route path="/goals/1" element={<Layout><Goal1 /></Layout>} />
          <Route path="/goals/2" element={<Layout><Goal2 /></Layout>} />
          <Route path="/goals/3" element={<Layout><Goal3 /></Layout>} />
          <Route path="/goals/4" element={<Layout><Goal4 /></Layout>} />
          <Route path="/goals/5" element={<Layout><Goal5 /></Layout>} />
          <Route path="/goals/6" element={<Layout><Goal6 /></Layout>} />
          <Route path="/goals/7" element={<Layout><Goal7 /></Layout>} />
          <Route path="/goals/8" element={<Layout><Goal8 /></Layout>} />
          <Route path="/goals/9" element={<Layout><Goal9 /></Layout>} />
          <Route path="/goals/10" element={<Layout><Goal10 /></Layout>} />
          <Route path="/goals/11" element={<Layout><Goal11 /></Layout>} />
          <Route path="/goals/12" element={<Layout><Goal12 /></Layout>} />
          <Route path="/goals/13" element={<Layout><Goal13 /></Layout>} />
          <Route path="/goals/14" element={<Layout><Goal14 /></Layout>} />
          <Route path="/goals/15" element={<Layout><Goal15 /></Layout>} />
          <Route path="/goals/16" element={<Layout><Goal16 /></Layout>} />
          <Route path="/goals/17" element={<Layout><Goal17 /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
