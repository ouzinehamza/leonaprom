import { ThemeProvider } from './components/ThemeProvider';
import QuoteModalProvider from './components/QuoteModal';
import ThemeSelector from './components/ThemeSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <div className="min-h-screen transition-all duration-500">
          <ThemeSelector />
          <Header />
          <Hero />
          <Services />
          <Promotions />
          <Products />
          <About />
          <Contact />
          <Footer />
        </div>
      </QuoteModalProvider>
    </ThemeProvider>
  );
}

export default App;