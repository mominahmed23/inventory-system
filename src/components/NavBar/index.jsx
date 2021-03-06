import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBar = () => {
  return (
    <div className="position-static px-5 py-3 custom-navbar">
      <div className="d-flex justify-space-between align-center">
        <h3 className="mb-0">Inventory Store</h3>
        <div>
          <Button type="link">
            <Link to="/">Home</Link>
          </Button>
          <Button type="link">
            <Link to="/visuals">Visuals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
