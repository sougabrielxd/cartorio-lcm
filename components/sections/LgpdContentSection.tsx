import React from 'react';

// Componente para a Seção de Conteúdo LGPD
const LgpdContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Texto introdutório */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            O Cartório Luciana Carrilho de Moraes Marinho está comprometido com a proteção dos dados pessoais 
            e o cumprimento da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta página apresenta 
            informações sobre como tratamos seus dados pessoais e quais são seus direitos.
          </p>
        </div>

        {/* Seção: O que é LGPD */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            O que é a LGPD?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A Lei Geral de Proteção de Dados (LGPD) estabelece regras sobre coleta, armazenamento, tratamento 
            e compartilhamento de dados pessoais, impondo maior proteção e penalidades para o descumprimento.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A LGPD garante aos titulares dos dados pessoais o direito de saber quais dados são coletados, 
            como são utilizados e a possibilidade de solicitar correção, exclusão ou portabilidade dos dados.
          </p>
        </div>

        {/* Seção: Dados Coletados */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Quais dados coletamos?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Em nossas atividades, podemos coletar e processar os seguintes dados pessoais:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            <li>Nome completo</li>
            <li>CPF e RG</li>
            <li>Data de nascimento</li>
            <li>Endereço residencial e comercial</li>
            <li>Telefone e e-mail</li>
            <li>Dados de documentos registrados (certidões, escrituras, etc.)</li>
            <li>Informações necessárias para a prestação de serviços cartoriais</li>
          </ul>
        </div>

        {/* Seção: Finalidade do Tratamento */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Para que utilizamos seus dados?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Utilizamos seus dados pessoais exclusivamente para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            <li>Prestação de serviços cartoriais conforme legislação vigente</li>
            <li>Cumprimento de obrigações legais e regulatórias</li>
            <li>Emissão de certidões e documentos</li>
            <li>Registro de atos e documentos</li>
            <li>Comunicação com os titulares dos dados</li>
            <li>Melhoria dos serviços prestados</li>
          </ul>
        </div>

        {/* Seção: Seus Direitos */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Seus Direitos
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            De acordo com a LGPD, você tem os seguintes direitos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
            <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
            <li><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a eliminação de dados desnecessários</li>
            <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados para outro fornecedor</li>
            <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento quando aplicável</li>
            <li><strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
            <li><strong>Informação sobre a possibilidade de não consentir:</strong> Saber sobre as consequências da negativa</li>
          </ul>
        </div>

        {/* Seção: Como exercer seus direitos */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Como exercer seus direitos?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Para exercer qualquer um dos direitos acima, você pode entrar em contato conosco através:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            <li>E-mail: lgpd@cartorio-lcm.com.br (exemplo fictício)</li>
            <li>Formulário de contato em nossa página</li>
            <li>Presencialmente em nosso cartório</li>
            <li>Telefone: (XX) XXXX-XXXX (exemplo fictício)</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Responderemos sua solicitação no prazo de até 15 (quinze) dias, conforme previsto na LGPD.
          </p>
        </div>

        {/* Seção: Segurança dos Dados */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Segurança dos Dados
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra 
            acessos não autorizados, alterações, divulgação ou destruição não autorizada. Nossos sistemas 
            são atualizados regularmente e seguimos as melhores práticas de segurança da informação.
          </p>
        </div>

        {/* Seção: Alterações nesta Política */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Alterações nesta Política
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Esta política de privacidade pode ser atualizada periodicamente. Recomendamos que você revise 
            esta página regularmente para se manter informado sobre como protegemos seus dados pessoais. 
            A data da última atualização será sempre indicada no topo desta página.
          </p>
        </div>

        {/* Seção: Contato do Encarregado de Dados */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
            Encarregado de Proteção de Dados (DPO)
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Nosso Encarregado de Proteção de Dados (DPO) está disponível para esclarecer dúvidas e receber 
            solicitações relacionadas à LGPD:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
            <li>Nome: [Nome do DPO - exemplo fictício]</li>
            <li>E-mail: dpo@cartorio-lcm.com.br (exemplo fictício)</li>
            <li>Telefone: (XX) XXXX-XXXX (exemplo fictício)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LgpdContentSection;

