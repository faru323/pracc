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
          <Link className="Links" to="/">
            Siyaset
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="Links" to="/">
            Iqtisadiyyat
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/">
            Cemiyyet{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/">
            Sou-biznes{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/">
            Muharibe
          </Link>
        </li>
        <li>
          {" "}
          <Link className="Links" to="/">
            Idman
          </Link>
        </li>

        <li>
          {" "}
          <Link className="Links" to="/">Kriminal  </Link>
        </li>

        <li> <Link className="Links" to="/">Medeniyyet</Link></li>
        <li>
          <i class="fa-solid fa-bars"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
