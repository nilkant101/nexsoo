const Process = () => {
  const steps = [
    "Understand your business & audience",
    "Create high-impact creatives",
    "Launch, test & optimize campaigns",
    "Scale what works with data"
  ];

  return (
    <section className="bg-dark py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl mb-14">
          How We <span className="text-accent">Work</span>
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-6"
            >
              <p className="text-lg">
                <span className="text-accent mr-2">0{index + 1}.</span>
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
