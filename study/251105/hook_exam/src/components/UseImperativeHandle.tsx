import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="자식 input 입력하세요"
      className="border p-2"
    />
  );
});

function ParentComponent() {
  const inputRef = useRef<{ focus: () => void; clear: () => void }>(null);

  return (
    <div className="p-4">
      <CustomInput ref={inputRef} />

      <button
        onClick={() => inputRef.current?.focus()}
        className="btn btn-primary"
      >
        포커스
      </button>
      <button
        onClick={() => inputRef.current?.clear()}
        className="btn btn-primary"
      >
        초기화
      </button>
    </div>
  );
}

export default ParentComponent;
