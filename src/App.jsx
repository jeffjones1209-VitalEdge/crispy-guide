import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DosageCalculator from './pages/DosageCalculator';
import Products from './pages/Products';
import Education from './pages/Education';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'calculator':
        return <DosageCalculator />;
      case 'products':
        return <Products />;
      case 'education':
        return <Education />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={page} onNavigate={setPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}