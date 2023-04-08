import { useDispatch } from "react-redux";
import BurgerMenu from "./BurgerMenu";
import { open } from "../store/modalSlice";

function Header() {
  const hasSmallScreen = window.innerWidth < 900;
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between w-full py-10 items-center gap-6">
      <div className="flex gap-5 items-center h-10">
        <img
          src="../../src/assets/images/logo.png"
          className="w-20 rounded-md bg-contain bg-center"
        ></img>
        <p className=" text-3xl pb-1 font-semibold tracking-wider">Robotica</p>
      </div>
      {!hasSmallScreen ? (
        <nav className="text-link flex gap-6 items-center">
          <a href="#">Nav</a>
          <a href="#">Nav</a>
          <a href="#">Nav</a>
          <a href="#">Nav</a>
          <a href="#">Nav</a>
        </nav>
      ) : null}
      {!hasSmallScreen && (
        <button
          className="w-36 p-2 bg-button text-link rounded-md my-3"
          onClick={() => {
            dispatch(open());
          }}
        >
          Button text
        </button>
      )}
      {hasSmallScreen && <BurgerMenu />}
    </header>
  );
}

export default Header;
