import Card from "./Card";
import HeaderSec from "./HeaderSec";
const Skills = () => {
  return (
    <section className="my-4">
      <HeaderSec text="The techs that I used in the projects" />
      <div className="grid grid-cols-3 gap-y-20 justify-items-center">
        <Card src="html.png" name="html" />
        <Card src="css.png" name="css" />
        <Card src="javascript.png" name="javascript" />
        <Card src="git.png" name="git" />
        <Card src="webpack.png" name="webpack" />
        <Card src="tailwind-css.png" name="tailwindcss" />
        <Card src="sass.png" name="sass" />
        <Card src="jest.png" name="jest" />
        <Card src="django.png" name="django" />
        <Card src="react.png" name="react" />
        <Card src="redux.png" name="redux" />
        <Card src="figma.png" name="figma" />
      </div>
    </section>
  );
};

export default Skills;
