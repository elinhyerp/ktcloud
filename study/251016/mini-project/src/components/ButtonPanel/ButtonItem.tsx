import { getButtonBgColor } from "./util";

interface Props {
  value: string;
  onClick: (value: string) => void;
}

function ButtonItem(props: Props) {
  const { value, onClick } = props;

  const bgColor = getButtonBgColor(value);
  const gridStyle = value === "=" ? "col-span-2" : "col-span-1";

  return (
    <button
      className={`${bgColor} ${gridStyle} w-full h-16 text-lg rounded-lg shadow 
             hover:opacity-80 hover:scale-105 transition-transform duration-150`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default ButtonItem;
