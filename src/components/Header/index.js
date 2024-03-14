import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Header = () => {
  const navigate = useNavigate();

  const logOutButton = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <h1>Jokes</h1>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={logOutButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <h1>Jokes</h1>
          <ul className="nav-menu">
            <Link to="/">
              <li className="nav-menu-item">Home</li>
            </Link>

            <Link to="/about">
              <li className="nav-menu-item">About</li>
            </Link>

            
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={logOutButton}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
           Home
          </li>

          <li className="nav-menu-item-mobile">
            About
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
