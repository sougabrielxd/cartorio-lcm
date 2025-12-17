'use client'
import React from 'react';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 


import HeroSection from '@/components/sections/HeroSection';
import LinksContentSection from '@/components/sections/LinksContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Componente principal da página de Links Úteis
const LinksPage: React.FC = () => {
  return (
    // Estrutura principal da página
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Links Úteis"
          subtitle="Acesso rápido a informações e recursos importantes relacionados à serventia e legislações."
          backgroundImageUrl="/images/hero-aerea.jpg"
        />
        
        {/* 2. Seção de conteúdo */}
        <LinksContentSection />
        
        {/* 3. Seção de ação */}
        <ActionSection />   
      </main>
      
      <Footer />
      
    </div>
  );
};

export default LinksPage;
