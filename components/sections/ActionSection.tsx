import React from "react";

const ActionSection: React.FC = () => {
  return (
<section className="p-10">
  <div className="container mx-auto px-4 max-w-5xl">

    {/* lista de links aqui */}

    {/* Ação */}
    <div className="mt-12">
      <a
        href="/"
        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Voltar ao Início
      </a>
    </div>

  </div>
</section>
  );
};

export default ActionSection;
