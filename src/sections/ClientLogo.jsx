const ClientLogo = ({ logo }) => {
  return (
    <div
      className="w-[140px] sm:w-[160px] md:w-[180px]
                 h-[80px] flex items-center justify-center
                 bg-white rounded-xl
                 shadow-sm hover:shadow-md
                 transition-all duration-300"
    >
      <img
        src={logo}
        alt="client logo"
        className="max-h-12 object-contain"
        draggable={false}
      />
    </div>
  );
};

export default ClientLogo;
