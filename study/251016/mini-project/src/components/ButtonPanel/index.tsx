import ButtonItem from "./ButtonItem";
import { buttonValues } from "./const";

interface Props {
  onButtonClick: (value: string) => void;
}

function ButtonPanel(props: Props) {
  const { onButtonClick } = props;

  return (
    <div className="w-full mt-4">
      {buttonValues.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between">
          {row.map((item) => (
            <ButtonItem key={item} value={item} onClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
