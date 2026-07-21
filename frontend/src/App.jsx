import { Route, Switch } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Explorer from '@/pages/Explorer';
import Solution from '@/pages/Solution';
import Contact from '@/pages/Contact';
import Admin from '@/pages/Admin';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/industries" component={Explorer} />
      <Route path="/industries/:industry" component={Explorer} />
      <Route path="/industries/:industry/:domain" component={Explorer} />
      <Route path="/industries/:industry/:domain/:area" component={Explorer} />
      <Route path="/industries/:industry/:domain/:area/:module" component={Explorer} />
      <Route path="/solution" component={Solution} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fa]">
      <Navbar />
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
}
