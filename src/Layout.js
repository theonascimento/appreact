import { NavLink, Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="/">
                        Cinemarte
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="#navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/inicio">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/marvel">
                                    Marvel
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/starwars">
                                    Star Wars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pokemon">
                                    Pokémon
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;