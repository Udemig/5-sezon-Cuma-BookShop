import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          Book<b>List</b>
        </a>
      </div>
      <div className="header-menu">
        <ul>
          {/* a etiketi sayfayi yeniler gider */}
          {/* Link etiketi sayfayı yenilemeden path ile  gider */}
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/booklist">Booklist</Link>
          </li>
        </ul>
      </div>
      <div className="header-process">
        <Link to=''>Login</Link>
        <button>
            <img src="https://img.icons8.com/?size=1x&id=36409&format=png" alt="" />
            <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
