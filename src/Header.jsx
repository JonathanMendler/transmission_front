import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [setIsLogoutVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupHide = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginHide = () => {
    setIsLoginVisible(false);
  };

  const handleLogoutShow = () => {
    setIsLogoutVisible(true);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" id="stream-a-go" href="#">
            <img src="/nes.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Stream-A-Go
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleSignupShow}>
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLoginShow}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Modal show={isSignupVisible} onClose={handleSignupHide}>
          <Signup />
        </Modal>
        <Modal show={isLoginVisible} onClose={handleLoginHide}>
          <Login />
        </Modal>
        <LogoutLink />
      </nav>
    </header>
  );
}
