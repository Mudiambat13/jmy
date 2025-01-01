import React from 'react';
import CountUp from 'react-countup';

function Stats() {
  const stats = [
    {
      value: 20,
      label: "Années d'expérience",
      prefix: "+",
      duration: 2.5
    },
    {
      value: 150,
      label: "Projets réalisés",
      prefix: "+",
      duration: 3
    },
    {
      value: 50,
      label: "Employés qualifiés",
      prefix: "+",
      duration: 2
    },
    {
      value: 98,
      label: "Clients satisfaits",
      suffix: "%",
      duration: 3.5
    }
  ];

  return (
    <section className="py-24 mt-20 bg-[#063970] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-20 h-20 bg-yellow-300 rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-sky-200 rounded-full -bottom-16 -right-16 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">
          Nos chiffres clés
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-105 transition-transform duration-300 p-6 rounded-lg hover:bg-sky-900/30"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
                <CountUp
                  end={stat.value}
                  duration={stat.duration}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sky-200 font-medium text-lg md:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats; 