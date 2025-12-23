import React from 'react';

// Componente para a Seção de Conteúdo LGPD
const LgpdContentSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Título Principal */}
        <div className="mb-8 sm:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            LGPD
          </h1>
        </div>

        {/* Nosso Compromisso com a Proteção de Dados */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Nosso Compromisso com a Proteção de Dados
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            O Cartório Luciana Carrilho de Moraes Marinho está comprometido com a proteção de dados pessoais e atua em conformidade com a Lei nº 13.709/2018 (LGPD).
          </p>
        </div>

        {/* Coleta e Uso de Dados */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Coleta e Uso de Dados
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Coletamos e utilizamos dados pessoais exclusivamente para a prestação dos serviços cartorários, cumprimento de obrigações legais e regulatórias, e para o exercício regular de direitos em processos judiciais, administrativos ou arbitrais.
          </p>
        </div>

        {/* Segurança da Informação */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Segurança da Informação
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
          </p>
        </div>

        {/* Seus Direitos */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Seus Direitos
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
            De acordo com a LGPD, você tem direito a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-2 sm:ml-4">
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Solicitar a portabilidade dos dados</li>
            <li>Obter informações sobre o compartilhamento de dados</li>
            <li>Revogar o consentimento</li>
          </ul>
        </div>

        {/* Compartilhamento de Dados */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Compartilhamento de Dados
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Os dados pessoais podem ser compartilhados com autoridades competentes, quando necessário para o cumprimento de obrigação legal ou regulatória, ou mediante ordem judicial.
          </p>
        </div>

        {/* Retenção de Dados */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Retenção de Dados
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Os dados pessoais são mantidos pelo período necessário para o cumprimento das finalidades para as quais foram coletados, respeitando os prazos legais de guarda de documentos estabelecidos pela legislação aplicável.
          </p>
        </div>

        {/* Contato */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato conosco através dos nossos canais de atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LgpdContentSection;

