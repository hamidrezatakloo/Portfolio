import Tag from "./Tag";
import styles from "./style.module.css";
const Project = ({ img, title, desc, tags, link, repo }) => {
  return (
    <div
      className="flex flex-col bg-light text-white font-calibre rounded my-12 opacity-0"
      data-scroll
      data-scroll-class={styles.fadeIn}
      data-scroll-direction="horizontal"
      data-scroll-speed="-9"
    >
      <div className="flex flex-col lg:flex-row">
        <img src={img} className="lg:w-6/12" />
        <div className="p-2 flex-1">
          <h2 className="my-8 font-semibold text-4xl 2xl:mt-28">{title}</h2>
          <p className="lg:text-xl xl:text-2xl">{desc}</p>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row items-center p-2">
        <div className="break-words ml-2 my-10 flex-1">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag.name} color={tag.color} />
          ))}
        </div>
        <div className="md:w-6/12 lg:w-4/12 text-center flex items-center justify-center gap-4">
          <a href={repo}>
            <img src="github.png" className="w-12 hover:scale-105" />
          </a>
          <a
            href={link}
            className="group h-[40px] rounded z-10 font-semibold text-white text-lg uppercase bg-blue-800 px-12 py-2 my-4 lg:my-0 inline-block relative hover:text-blue-800"
          >
            <div className="absolute w-0 h-full -z-10 rounded group-hover:w-full bg-white left-0 top-0 transition-all"></div>
            Open Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
