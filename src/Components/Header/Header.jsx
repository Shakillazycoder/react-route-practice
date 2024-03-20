import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] px-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
                <NavLink to={"/todos"}>Todos</NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-10">
              <NavLink
                className={({ isActive }) => (isActive ? "underline bg-red-300 p-2 rounded-md font-bold" : "")}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "underline bg-red-300 p-2 rounded-md font-bold" : "")} to={"/about"}>About</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "underline bg-red-300 p-2 rounded-md font-bold" : "")} to={"/contact"}>Contact Us</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "underline bg-red-300 p-2 rounded-md font-bold" : "")} to={"/todos"}>Todos</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
