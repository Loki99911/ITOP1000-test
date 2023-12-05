import { Dispatch, SetStateAction } from "react";

export interface IProps {
  value: string;
  symbols: { [key: string]: string };
  onChange: Dispatch<SetStateAction<string>>;
}
