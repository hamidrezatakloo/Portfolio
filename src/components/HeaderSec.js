const HeaderSec = ({ text }) => {
  return (
    <h1
      className="mb-8 sm:mb-16 text-white font-passion text-3xl sm:text-4xl lg:text-5xl
      bg-gradient-to-r from-pink-500 to-yellow-400  bg-clip-text text-transparent"
    >
      {text}
    </h1>
  );
};
export default HeaderSec;
