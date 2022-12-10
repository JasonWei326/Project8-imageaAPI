import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./pages/components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
                <strong>首頁</strong></Link>
          </li>

          <li>
            <Link to="/about">
              <strong>關於我</strong>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
