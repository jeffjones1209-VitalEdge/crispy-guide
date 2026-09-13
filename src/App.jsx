import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import RequestAccess from './pages/RequestAccess';
import FullCatalog from './pages/FullCatalog';
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
  const [catalogAccess, setCatalogAccess] = useState(false);

  // Check for saved catalog access (researcher verified)
  // In production this would check a real auth token
  // For now, quick toggle via localStorage
  useState(() => {
    const saved = localStorage.getItem('vitaledge_catalog_access');
    if (saved === 'true') setCatalogAccess(true);
  });

  const renderPage = () => {
    switch (page) {
      case 'landing': return <Landing onNavigate={setPage} />;
      case 'request-access': return <RequestAccess onNavigate={setPage} />;
      case 'catalog': return catalogAccess ? <FullCatalog /> : <Landing onNavigate={setPage} />;
      case 'products': return catalogAccess ? <FullCatalog /> : <Products />;
      case 'calculator': return <DosageCalculator />;
      case 'education': return <Education />;
      case 'admin': return <Admin />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'shipping': return <ShippingPolicy />;
      case 'refunds': return <RefundReturnPolicy />;
      case 'contact': return <ContactUs />;
      default: return <Landing onNavigate={setPage} />;
    }
  };

  const isPolicyPage = ['privacy', 'terms', 'shipping', 'refunds', 'contact', 'request-access'].includes(page);
  const isAdminPage = page === 'admin';
  const isCatalogPage = page === 'catalog' || (page === 'products' && catalogAccess);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <AgeVerificationGate />
        {!isAdminPage && !isPolicyPage && (
          <Header
            currentPage={page}
            onNavigate={setPage}
            catalogAccess={catalogAccess}
          />
        )}
        <main className="flex-1">{renderPage()}</main>
        {!isAdminPage && !isCatalogPage && <Footer onNavigate={setPage} />}
      </div>
    </CartProvider>
  );
}