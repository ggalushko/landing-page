import NavLinks from "./NavLinks";

function NavSlider(props: {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  document.body.style.overflow = `${props.isOpened ? "hidden" : ""}`;
  return (
    <div
      className={`${
        props.isOpened ? "" : "opacity-0 pointer-events-none"
      } w-full h-full fixed top-0 right-0 bg-modal grid place-content-center duration-700 transition-opacity z-40`}
    >
      <div
        className={` transition-transform duration-500 w-1/2 bg-gray-600 z-50 h-screen absolute -right-[50%] top-0 opacity-95 
        ${props.isOpened ? " translate-x-[-100%]" : ""}`}
      >
        <nav
          className="text-white flex flex-col gap-16 items-center mt-40 text-xl"
          onClick={(e) => {
            const target = e.target as HTMLAnchorElement;
            if (target.href) props.setIsOpened(false);
          }}
        >
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}

export default NavSlider;
