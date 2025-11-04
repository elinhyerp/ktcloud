import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("복잡한 계산 중...");
    return count * 1000;
  }, [count]);

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-bold">useMemo 예제</h2>
      <p>결과: {expensiveValue}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="btn btn-primary"
      >
        증가
      </button>
      <input
        className="border p-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력하세요"
      />
    </div>
  );
}
