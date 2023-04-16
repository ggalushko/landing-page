import { useDispatch } from "react-redux";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";
import ActionButton from "./ActionButton";

function Header() {
  const hasSmallScreen = window.innerWidth < 1090;

  return (
    <header className="flex justify-between w-full py-10 items-center gap-6">
      <div className="flex gap-5 items-center h-10">
        <img
          src="./assets/images/logo.png"
          className="w-20 rounded-md bg-contain bg-center"
        ></img>
        <p className=" text-xl md:text-3xl pb-1 font-semibold tracking-wider">
          Robotica
        </p>
      </div>
      {!hasSmallScreen ? (
        <nav className="text-link text-xl flex gap-7 items-center">
          <NavLinks />
        </nav>
      ) : null}
      {hasSmallScreen ? <BurgerMenu /> : <ActionButton text="Discover"/>}
    </header>
  );
}

export default Header;
