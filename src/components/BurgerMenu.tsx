import { useState } from "react";
import { NavDrawer } from "./NavDrawer";
import { BurgerButton } from "./BurgerButton";

export function BurgerMenu() {
  const [isOpened, setIsopened] = useState(false);
  return (
    <>
      <BurgerButton isOpened={isOpened} setIsOpened={setIsopened} />
      <NavDrawer isOpened={isOpened} setIsOpened={setIsopened} />
    </>
  );
}
