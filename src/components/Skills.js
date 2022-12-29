import Card from "./Card";
import HeaderSec from "./HeaderSec";
const Skills = () => {
  return (
    <section className="my-4" data-scroll-section>
      <HeaderSec text="The techs that I used in the projects" />
      <div className="grid grid-cols-3 gap-y-20 justify-items-center">
        <Card src="Portfolio/html.png" name="html" />
        <Card src="Portfolio/css.png" name="css" />
        <Card src="Portfolio/javascript.png" name="javascript" />
        <Card src="Portfolio/git.png" name="git" />
        <Card src="Portfolio/webpack.png" name="webpack" />
        <Card src="Portfolio/tailwind-css.png" name="tailwindcss" />
        <Card src="Portfolio/sass.png" name="sass" />
        <Card src="Portfolio/jest.png" name="jest" />
        <Card src="Portfolio/django.png" name="django" />
        <Card src="Portfolio/react.png" name="react" />
        <Card src="Portfolio/redux.png" name="redux" />
        <Card src="Portfolio/figma.png" name="figma" />
      </div>
    </section>
  );
};

export default Skills;
