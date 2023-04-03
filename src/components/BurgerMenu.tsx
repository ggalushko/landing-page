import { useState } from "react";
import NavSlider from "./NavSlider";
import BurgerButton from "./BurgerButton";

function BurgerMenu() {
  const [isOpened, setIsopened] = useState(false);
  return (
    <>
      <BurgerButton isOpened={isOpened} setIsOpened={setIsopened} />
      <NavSlider isOpened={isOpened} />
    </>
  );
}

export default BurgerMenu;
