function NavLinks() {
  const className = "hover:opacity-60 transition-opacity";
  return (
    <>
      <a href="#about" className={className}>
        About
      </a>
      <a href="#feedback" className={className}>
        Feedback
      </a>
      <a href="#advantages" className={className}>
        Advantages
      </a>
      <a href="#mission" className={className}>
        Mission
      </a>
      <a href="#pricing" className={className}>
        Pricing
      </a>
      <a href="#contact" className={className}>
        Contact
      </a>
    </>
  );
}

export default NavLinks;
