
import logo from "../images/logo.png";

export default function Navbar(){
    return (
        <div className="navbar">
            <a href="#"><img className="navbar--logo" src={logo}></img></a> 
            <nav className="nav--list">
                <a className="num" href="">About us</a>
                <a className="num" href="">Focus Area & Skills </a>
                <button className="btn">Login</button>
            </nav>
        </div>
    )
}