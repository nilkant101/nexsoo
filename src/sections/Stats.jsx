import Counter from "../animations/Counter";

const Stats = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "30+", label: "Active Clients" },
    { number: "100%", label: "Transparent Process" },
  ];

  return (
    <section className="bg-dark py-10">
      <div className="mt-[-100px] max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl text-white">
              <Counter target={item.number} duration={5} />
            </h3>
            <p className="text-muted mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
