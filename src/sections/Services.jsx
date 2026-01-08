const Services = () => {
  const services = [
    {
      title: "Performance Ads",
      desc: "Lead-focused Meta & Google ad systems built to convert."
    },
    {
      title: "Creative Production",
      desc: "Scroll-stopping ad creatives & short-form videos."
    },
    {
      title: "Landing Pages",
      desc: "Conversion-optimized pages designed for sales."
    }
  ];

  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-center mb-16">
          What We Do <span className="text-accent">Best</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-8 hover:border-accent transition"
            >
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-muted">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
