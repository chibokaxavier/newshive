import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <p>About</p>
          <p>Contact</p>
          <p>Advertisement</p>
          <p>Privacy</p>
          <p>Login</p>
        </div>
        <div>icons</div>
      </div>
      <div className="text-5xl font-bold py-5">NEWSHIVE</div>
      <div></div>
    </header>
  );
};

export default Header;
