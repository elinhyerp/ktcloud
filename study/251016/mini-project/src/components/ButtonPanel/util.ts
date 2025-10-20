export const getButtonBgColor = (value: string) => {
  if (["C", "←"].includes(value)) {
    return "bg-red-400";
  }

  if (["%", "/", "*", "-", "+"].includes(value)) {
    return "bg-yellow-400";
  }

  if (value === "=") {
    return "bg-green-500";
  }

  return "bg-white";
};
