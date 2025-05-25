// src/features/trust/Trust.tsx

const stats = [
  {
    label: "With",
    value: "5+ years",
    description: "helping people move, heal, thrive",
  },
  {
    label: "Trusted by",
    value: "1000+ clients",
    description: "across India & globally",
  },
  {
    label: "Guided",
    value: "200+ healings",
    description: "through yoga & nutrition",
  },
];

const Trust = () => (
  <section className="w-full py-14 flex flex-col items-center bg-white">
    <h2 className="text-[28px] font-semibold text-gray-500 mb-10 text-center">
      Conducted 100+ sessions across India & globally
    </h2>
    <div className="flex flex-col gap-10 w-full items-center">
      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
        {stats.map(({ label, value, description }, i) => (
          <div key={i} className="flex flex-col items-center min-w-[220px]">
            <span className="mb-1 text-md font-normal text-black">{label}</span>
            <span className="text-green-600 text-[36px] font-bold leading-none mb-1">
              {value}
            </span>
            <span className="text-black text-base font-normal text-center">
              {description}
            </span>
          </div>
        ))}
      </div>
      {/* Images */}
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        <img
          src="/assets/image/trust/trust-1.jpg"
          alt="Yoga class 1"
          className="w-[380px] h-[270px] rounded-2xl object-cover"
        />
        <img
          src="/assets/image/trust/trust-2.jpg"
          alt="Yoga class 2"
          className="w-[380px] h-[270px] rounded-2xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default Trust;
