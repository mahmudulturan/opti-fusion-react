import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        Products
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        About
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-secondary hover:bg-accent hover:text-white text-white py-2 px-3 rounded-lg"
            : "hover:bg-accent hover:text-white py-2 px-3 rounded-lg"
        }>
        LogIn
      </NavLink>
    </>
  );


  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl bg-accent font-bold text-white">
            OptiFusion
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1 gap-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-background text-textColor font-semibold">LogOut</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
