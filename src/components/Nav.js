import testSVG from "../Image/Logo.svg"
function Nav(){
    return(
        <div>
          <nav>
        <ul className="flex-nav-container">
        <img src={testSVG}></img>
            <li><a href="/" title="Home">Home</a></li>
            <li><a href="#" title="About">About</a></li>
            <li><a href="#" title="Menu">Menu</a></li>
            <li><a href="/reservation" title="Reservation">Reservation</a></li>
            <li><a href="#" title="OrderOnline">Order Online</a></li>
            <li><a href="#" title="Login">Login</a></li>
        </ul>
        </nav>
        </div>
    
    )
}

export default Nav;