const Header = () => {
  return (
    <div
      id="home"
      className="bg-[#212437] flex flex-row text-[#f9fdff] p-8 justify-between"
    >
      <div className="hidden md:block w-[600px]">
        <span className="text-2xl font-extrabold text-[#f9fdff] italic">
          Chandana MSc.Chemistry, B.Ed
        </span><br/>
      </div>

      <div className=" flex flex-row items-center justify-center gap-10 w-full">
        <a href="#home" className="hover:text-[#ff4b57]">
          Home
        </a>
        <a href="#about" className="hover:text-[#ff4b57]">
          About
        </a>
        <a href="#connect" className="hover:text-[#ff4b57]">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Header;
