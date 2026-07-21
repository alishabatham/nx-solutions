import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import Home from '@/pages/Home';
import Explorer from '@/pages/Explorer';
import Solution from '@/pages/Solution';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Explorer Routes */}
        <Route path="/industries" component={Explorer} />
        <Route path="/industries/:industry" component={Explorer} />
        <Route path="/industries/:industry/:domain" component={Explorer} />
        <Route path="/industries/:industry/:domain/:area" component={Explorer} />
        <Route path="/industries/:industry/:domain/:area/:module" component={Explorer} />
        
        {/* Solution Route */}
        <Route path="/solution" component={Solution} />

        {/* Contact Route */}
        <Route path="/contact" component={Contact} />
        
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              <Router />
            </div>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
