import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleSidebar()}
      />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG15.png"
        alt="Youtube icon"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={28} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.pngkey.com/png/detail/73-730434_04-dummy-avatar.png"
          alt="04, - Dummy Avatar@pngkey.com"
        />
      </div>
    </div>
  );
};

export default Header;
