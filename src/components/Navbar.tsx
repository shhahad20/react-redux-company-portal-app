import { Link } from "react-router-dom";
import './App.css'


const Nav = () =>{
    return (
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
        </nav>
      );
}
export default Nav;