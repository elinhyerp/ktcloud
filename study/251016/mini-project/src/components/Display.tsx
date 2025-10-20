interface Props {
  expression: string;
  result?: number | string;
}

function Display(props: Props) {
  const { expression, result } = props;

  const renderDisplay = (() => {
    if (!result) {
      if (!expression) {
        return <div className="text-3xl font-bold">0</div>;
      }

      return (
        <div className="text-3xl font-bold text-gray-300">{expression}</div>
      );
    }

    return (
      <>
        <div className="text-gray-400 text-xl">{expression}</div>
        <div className="text-3xl font-bold">{result}</div>
      </>
    );
  })();

  return (
    <div className="bg-black text-white rounded-xl p-4 h-24 flex flex-col justify-center items-end text-right shadow-inner">
      {renderDisplay}
    </div>
  );
}

export default Display;
