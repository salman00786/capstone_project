import testSVG from "../Image/Logo.svg"
// import "../../src/App.css";
function Nav(){
    return(
        <div>
            
        <ul className="flex-nav-container">
        <img src={testSVG}></img>
            <li><a href="#" title="HOme">Home</a></li>
            <li><a href="#" title="About">About</a></li>
            <li><a href="#" title="Menu">Menu</a></li>
            <li><a href="#" title="Reservation">Reservation</a></li>
            <li><a href="#" title="OrderOnline">Order Online</a></li>
            <li><a href="#" title="Login">Login</a></li>
        </ul>
        </div>
    )
}

export default Nav;