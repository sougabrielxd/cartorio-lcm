import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
}) => {
  return (
    <section className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center text-white">
      
      {/* Background */}
      {backgroundImageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
          }}
          aria-hidden="true"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500"
          aria-hidden="true"
        />
      )}

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center h-full">
        <div className="text-center max-w-2xl">
          <p className="text-sm uppercase tracking-widest font-semibold opacity-80 mb-2">
            Links
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl mt-3 opacity-90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
