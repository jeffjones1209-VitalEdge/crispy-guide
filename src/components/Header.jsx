import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header({ currentPage, onNavigate, catalogAccess }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  const publicNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'calculator', label: 'Dosage Tool' },
  ];

  const researcherNavItems = [
    { id: 'catalog', label: 'Catalog', badge: '180+ Products' },
    { id: 'calculator', label: 'Dosage Tool' },
  ];

  const navItems = catalogAccess ? researcherNavItems : publicNavItems;

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => onNavigate(catalogAccess ? 'catalog' : 'home')} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                VItal<span className="text-sky-500">Edge</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-sky-100 text-sky-600 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
              {!catalogAccess && (
                <button
                  onClick={() => onNavigate('request-access')}
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-sm hover:from-sky-400 hover:to-blue-400 transition-all"
                >
                  Request Access
                </button>
              )}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id ? 'text-sky-600 bg-sky-50' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-sky-100 text-sky-600 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
              {!catalogAccess && (
                <button
                  onClick={() => { onNavigate('request-access'); setMobileOpen(false); }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-sky-600 bg-sky-50 mt-1"
                >
                  Request Researcher Access →
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}