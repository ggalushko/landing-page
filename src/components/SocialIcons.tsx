function SocialIcons() {
  return (
    <div className="flex gap-5 justify-center">
      <a href="https://www.facebook.com" target="_blank" rel="noopener">
        <img
          src="./assets/images/facebook.png"
          alt="facebook logo"
          className="w-10 h-10 bg-center bg-contain 
            grayscale hover:grayscale-0 transition-[filter] duration-300"
        />
      </a>
      <a href="https://www.telegram.org" target="_blank" rel="noopener">
        <img
          src="./assets/images/telegram.png"
          alt="telegram logo"
          className="w-10 h-10 bg-center bg-contain
            grayscale hover:grayscale-0 transition-[filter] duration-300"
        />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener">
        <img
          src="./assets/images/twitter.png"
          alt="twitter logo"
          className="w-10 h-10 bg-center bg-contain
            grayscale hover:grayscale-0 transition-[filter] duration-300"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
