const Tag = ({ name, color }) => {
  return (
    <span
      style={{ border: `2px solid ${color}` }}
      className="capitalize h-[40px] py-2 px-4 break-words inline-block my-2 mr-4  rounded"
    >
      {name}
    </span>
  );
};

export default Tag;
