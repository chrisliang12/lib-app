import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Love 2 Read</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/home"}>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/search"}>Search Books</NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item m-1'>
              <NavLink className='btn btn-outline-light' type='button' to={""}>Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}