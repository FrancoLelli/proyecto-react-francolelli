import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import './NavBar.css'

function NavBar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg color">
                <div className="container-fluid">
                        <Link className="navbar-brand " to="/">KongaLibre</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2" to="/favoritos"></Link>
                        </li>
                        <li className="nav-item m-2">
                            <CardWidget />
                        </li>
                    </ul>
                    </div>
            </nav>
        </>
    )
}

export default NavBar;