import './header.css';
import AirbnbLogo from '/svgs/airbnb.svg';

export default function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AirbnbLogo}
              className="App-logo react logo-spin"
              alt="React logo"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
