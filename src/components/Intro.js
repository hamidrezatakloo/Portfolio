const Intro = () => {
  return (
    <div
      className="h-screen flex flex-col justify-around items-center lg:flex-row"
      data-scroll-section
    >
      <img src="Portfolio/avatar.png" className="rounded-full w-[300px]" />
      <header className="font-calibre flex flex-col gap-4 md:gap-6 mx-auto w-fit ">
        <span className="text-cyan-400 text-xl xl:pl-1">Hi, my name is</span>
        <h1 className="text-primary font-semibold text-4xl md:text-5xl xl:text-7xl">
          Hamidreza Takaloo
        </h1>
        <h2 className="block text-secondary font-semibold text-4xl md:text-5xl xl:text-7xl">
          I build things for the web
        </h2>
        <p className="text-secondary text-xl break-words md:w-[500px]">
          I’m a full stack developer from iran and love creating things in the
          web. I have frontend skills in react and backend skills in django.I am
          still in learning new stuff.
        </p>
      </header>
    </div>
  );
};

export default Intro;
