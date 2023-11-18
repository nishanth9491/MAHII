import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div></div>

      <div className="navcenter">
        <Link
          activeClass="active"
          to="today"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          Today
        </Link>

        {/* <Link
          activeClass="active"
          to="implement"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          Add
        </Link> */}
        {/* <Link className="navitems">Login</Link> */}
      </div>
      <div>{/* <img src={femaleImg} className='profilepic' alt="" /> */}</div>
    </nav>
  );
};

export default Navbar;
