'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from '@/components/ui/image';


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Fechar menu quando a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo-lcm.svg"
              alt="LCM Cartório"
              className="w-auto h-8 md:h-10"
            />
          </a>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" style={{ fontFamily: 'Source Sans Pro, sans-serif' }} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="/nossos-servicos" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
            Nossos Serviços
          </a>
          <a href="/links" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
          Links Úteis
          </a>
          <a href="/lgpd" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
          LGPD
          </a>
          <a 
            href={pathname === '/' ? '#contato' : '/#contato'} 
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className=" text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <a 
            href="/" 
            onClick={closeMobileMenu}
            style={{ fontFamily: 'Source Sans Pro, sans-serif' }} 
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-gray-200"
          >
            Início
          </a>
          <a 
            href="/nossos-servicos" 
            onClick={closeMobileMenu}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-gray-200"
          >
            Nossos Serviços
          </a>
          <a 
            href="/links" 
            onClick={closeMobileMenu}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-gray-200"
          >
            Links Úteis
          </a>
          <a 
            href="/lgpd" 
            onClick={closeMobileMenu}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-gray-200"
          >
            LGPD
          </a>
          <a 
            href={pathname === '/' ? '#contato' : '/#contato'} 
            onClick={closeMobileMenu}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-gray-200"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
