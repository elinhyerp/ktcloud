import { getButtonBgColor } from "./util";

interface Props {
  value: string;
  onClick: (value: string) => void;
}

function ButtonItem(props: Props) {
  const { value, onClick } = props;

  const bgColor = getButtonBgColor(value);
  const flexStyle = value === "=" ? "flex-[2]" : "flex-[1]";

  return (
    <button
      className={`${bgColor} ${flexStyle} text-lg p-4 m-1 rounded-lg shadow 
             hover:opacity-80 hover:scale-105 transition-transform duration-150`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default ButtonItem;
