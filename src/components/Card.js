const Card = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="overflow-hidden relative before:skew-x-[-35deg] before:rounded before:absolute before:w-4/12 before:h-full before:bg-zinc-100/20 before:left-[-60px] before:top-0 before:animate-slide">
        <img src={src} className="w-16 sm:w-24 lg:w-36 rounded-lg" />
      </div>
      <span className="capitalize font-passion text-primary text-2xl sm:text-4xl lg:text-5xl">
        {name}
      </span>
    </div>
  );
};

export default Card;
