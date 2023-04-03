function NavSlider(props: { isOpened: boolean }) {
  return (
    <div
      className={` transition-transform duration-500 w-1/2 bg-gray-600 h-screen absolute -right-[50%] top-0 opacity-95 ${
        props.isOpened ? " translate-x-[-100%]" : ""
      }`}
    >
      <nav className="text-white flex flex-col gap-6 items-center mt-32">
        <a href="#">Nav</a>
        <a href="#">Nav</a>
        <a href="#">Nav</a>
        <a href="#">Nav</a>
        <a href="#">Nav</a>
      </nav>
    </div>
  );
}

export default NavSlider;
