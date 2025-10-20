import { useState } from "react";
import ButtonPanel from "../components/ButtonPanel";
import Display from "../components/Display";
import { evaluate } from "mathjs";

function Calc() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<number | string>();

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setExpression("");
      setResult(undefined);
    } else if (value === "←") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        if (!expression.trim()) {
          setResult(undefined);
          return;
        }

        const calculatedResult = evaluate(expression);

        if (typeof calculatedResult === "number" && !isNaN(calculatedResult)) {
          setResult(calculatedResult);
        } else {
          setResult("Error");
          setExpression("");
        }
      } catch (error) {
        console.error("계산 오류:", error);
        setResult("Error");
        setExpression("");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="w-80 mx-auto mt-10 p-4 bg-gray-100 rounded-2xl shadow-lg">
      <Display expression={expression} result={result} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calc;
