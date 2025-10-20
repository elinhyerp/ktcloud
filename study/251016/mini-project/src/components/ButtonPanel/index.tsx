import ButtonItem from "./ButtonItem";
import { buttonValues } from "./const";

interface Props {
  onButtonClick: (value: string) => void;
}

function ButtonPanel(props: Props) {
  const { onButtonClick } = props;

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {buttonValues.flat().map((item) => (
        <ButtonItem key={item} value={item} onClick={onButtonClick} />
      ))}
    </div>
  );
}

export default ButtonPanel;
