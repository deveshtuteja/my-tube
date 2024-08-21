import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "Coding",
    "Music",
    "News",
    "Mixes",
    "T-Series",
    "Hip-Hop",
    "Virat Kohli",
  ];
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button name={btn} key={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
