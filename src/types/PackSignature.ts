import { ExtraOption } from "./ExtraOption";

export type PackSignature = {
  [key: number]: {
    name: string;
    initialPrice: number;
    description: string;
    includedOptions: string[];
    extraOptions: ExtraOption[];
  };
};
