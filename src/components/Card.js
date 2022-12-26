const Card = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <img src={src} className="w-16 sm:w-24 lg:w-36 rounded-lg" />
      <span className="capitalize font-passion text-primary text-2xl sm:text-4xl lg:text-5xl">
        {name}
      </span>
    </div>
  );
};

export default Card;
