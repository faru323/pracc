import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <li>
          {" "}
          <Link className="Links" to="/">
            Bas sehife
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/siyaset">
            Siyaset
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="Links" to="/iqtisadiyyat">
            Iqtisadiyyat
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/cemiyyet">
            Cemiyyet{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/sou-biznes">
            Sou-biznes{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/muharibe">
            Muharibe
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/idman">
            Idman
          </Link>
        </li>

        <li>
          {" "}
          <Link className="Links" to="/kriminal">Kriminal  </Link>
        </li>

        <li> <Link className="Links" to="/medeniyyet">Medeniyyet</Link></li>
        <li>
          <i class="fa-solid fa-bars"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
