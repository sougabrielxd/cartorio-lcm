import React from 'react';

// Interface para a estrutura de um link
interface LinkItem {
  id: number;
  name: string;
  url: string; // Placeholder URL
}

// Dados de exemplo para a lista de links
const placeholderLinks: LinkItem[] = [
  { id: 1, name: 'ANOREG/BR – Associação dos Notários e Registradores do Brasil', url: 'https://www.anoreg.org.br/site/' },
  { id: 2, name: 'ARPEN/BR – Associação dos Registradores de Pessoas Naturais', url: 'https://arpenbrasil.org.br/' },
  { id: 3, name: 'Câmara dos Deputados', url: 'https://www.camara.leg.br/' },
  { id: 4, name: 'CDT- Centro de Estudos e Distribuição de Títulos e Documentos', url: 'https://cdtsp.rtdbrasil.org.br/inicio' },
];

// Componente para a Seção de Conteúdo (Texto e Lista de Links)
const LinksContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Texto introdutório */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Neste módulo disponibilizamos diversos Links de sites relacionados à nossa serventia e ou informações de legislações.          </p>
        </div>

        {/* Subtítulo "Associações / Instituições" */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
          Associações / Instituições
        </h2>

        {/* Lista vertical de links externos (Estrutura semântica ul, li, a) */}
        <ul className="space-y-4">
          {placeholderLinks.map((link) => {
            // Links que devem ter cor cinza
            const grayLinks = [
              'ANOREG/BR – Associação dos Notários e Registradores do Brasil',
              'ARPEN/BR – Associação dos Registradores de Pessoas Naturais',
              'Câmara dos Deputados',
              'CDT- Centro de Estudos e Distribuição de Títulos e Documentos'
            ];
            
            const isGrayLink = grayLinks.includes(link.name);
            
            return (
              <li key={link.id} className="text-lg">
                {/* Link preparado para abrir em nova aba */}
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition duration-150 ease-in-out font-medium hover:underline ${
                    isGrayLink 
                      ? 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300' 
                      : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                  }`}
                >
                  {link.name}
                  {/* Ícone de link externo (opcional, mas bom para UX) */}
                  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LinksContentSection;
