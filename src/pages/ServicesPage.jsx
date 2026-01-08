
const Services = () => {
  const services = [
    {
      title: "Performance Advertising",
      desc: "Data-driven ad campaigns built to generate consistent leads and sales, not just clicks.",
    },
    {
      title: "Creative & Video Production",
      desc: "Scroll-stopping ad creatives and short-form videos designed for attention and conversion.",
    },
    {
      title: "Graphic Design",
      desc: "High-impact visual designs that strengthen your brand identity and improve engagement across digital platforms.",
    },
    {
      title: "Growth Strategy",
      desc: "Clear roadmap to scale your business using insights, testing, and performance data.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            Our <span className="text-[#2ED3A7]">Services</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF]">
            We don’t sell random services. We build focused growth systems
            that actually move your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8
                         hover:border-[#2ED3A7]/40 transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-3">
                {service.title}
              </h3>

              <p className="text-[#9CA3AF] leading-relaxed">
                {service.desc}
              </p>

              {/* subtle hover line */}
              <div className="mt-6 h-[2px] w-0 bg-[#2ED3A7] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
