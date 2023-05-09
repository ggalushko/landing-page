import { ExtraOption } from "./ExtraOption";

export type Pack = {
  pack: {
    name: string;
    initialPrice: number;
    description: string;
    includedOptions: string[];
    extraOptions: ExtraOption[];
  };
};
