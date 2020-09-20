import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar(props) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            My Todo App
          </Link>
          <ul id="nav-mobile" className="right">
            {!isAuthenticated ? (
              <li>
                <LoginButton />
              </li>
            ) : (
              <>
                <li>
                  <LogoutButton />
                </li>
                <img src={user.picture} className="profilePicture" />
              </>
            )}
          </ul>
        </div>
      </nav>
      {props.children}
    </>
  );
}
