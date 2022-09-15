export const useToFormat = (value: number) => {
  let str = String(value);
  let newStr =
    str
      .split("")
      .reverse()
      .join("")
      .match(/\d{0,3}/g)
      .join(",")
      .split("")
      .reverse()
      .join("")
      .trim() + ".00";
  return "$" + newStr.slice(1);
};

export const useTransformValueInNumber = (value: string) => {
  if (value[0] === "$") {
    let transformedValue = value.split(",").join("").slice(1);

    return String(Number.parseFloat(transformedValue));
  }
  return value;
};
