import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = ({ token, handleToken }) => {
  return (
    <header>
      <Link to="/">
        <img src="../assets/img/logo.png" alt="" />
      </Link>

      <span>
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Sign Out
          </button>
        ) : (
          <div style={{ display: `flex` }}>
            <div>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <button>Sign In</button>
              </Link>
            </div>
          </div>
        )}
      </span>
      <div>
        <Link to="/games">
          <button>GAMES</button>
        </Link>
      </div>

      <div>
        <Link to="/creators">
          <button>CREATORS</button>
        </Link>
      </div>
      {token ? (
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      ) : (
        <Link to="/login">
          <button>Favorites</button>
        </Link>
      )}
    </header>
  );
};
export default Header;
