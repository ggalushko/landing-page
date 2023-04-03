import BurgerMenu from "./BurgerMenu";

function Header() {
  const hasSmallScreen = window.innerWidth < 840;
  return (
    <div className="flex justify-between w-full py-10 items-center">
      <div className="flex gap-5 items-center h-10">
        <figure className="w-20 h-10 bg-white rounded-md"></figure>
        <p className=" font-medium text-xl pb-1">Company name</p>
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
      <button
        className="w-40 h-7 bg-button text-link rounded-md text-[16px] my-3"
        onClick={() => console.log(window.innerWidth)}
      >
        Button text
      </button>
      {hasSmallScreen && <BurgerMenu />}
    </div>
  );
}

export default Header;
