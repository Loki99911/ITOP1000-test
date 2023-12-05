import { IProps } from "./types";

export default function SelectComp({ value, symbols, onChange }: IProps) {
  if (!symbols) return null;

  const symbolsArr = Object.keys(symbols);

  return (
    <select
      name="select"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {symbolsArr.map((el) => (
        <option value={el} key={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
