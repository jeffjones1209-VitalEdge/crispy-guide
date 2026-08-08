import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DosageCalculator from './pages/DosageCalculator';
import Products from './pages/Products';
import Education from './pages/Education';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundReturnPolicy from './pages/RefundReturnPolicy';
import ContactUs from './pages/ContactUs';
import AgeVerificationGate from './components/AgeVerificationGate';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'calculator': return <DosageCalculator />;
      case 'products': return <Products />;
      case 'education': return <Education />;
      case 'admin': return <Admin />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'shipping': return <ShippingPolicy />;
      case 'refunds': return <RefundReturnPolicy />;
      case 'contact': return <ContactUs />;
      default: return <Home onNavigate={setPage} />;
    }
  };

  const isPolicyPage = ['privacy', 'terms', 'shipping', 'refunds', 'contact'].includes(page);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <AgeVerificationGate />
        {page !== 'admin' && !isPolicyPage && <Header currentPage={page} onNavigate={setPage} />}
        <main className="flex-1">{renderPage()}</main>
        {page !== 'admin' && <Footer onNavigate={setPage} />}
      </div>
    </CartProvider>
  );
}
