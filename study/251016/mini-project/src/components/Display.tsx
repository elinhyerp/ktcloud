interface Props {
  expression: string;
  result?: number | string;
}

function Display(props: Props) {
  const { expression, result } = props;

  return (
    <div className="bg-black text-white rounded-xl p-4 h-24 flex flex-col justify-center items-end text-right shadow-inner">
      {!expression && !result ? (
        <div className="text-3xl font-bold">0</div>
      ) : (
        <>
          <div className="text-gray-400 text-xl">{expression}</div>
          <div className="text-3xl font-bold">{result}</div>
        </>
      )}
    </div>
  );
}

export default Display;
