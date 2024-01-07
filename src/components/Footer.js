import footerImg from "../Image/Asset 20@4x.png";

function Footer(){
    return(
        <footer className="footer">

            <div className="footerContainer">
            <div className="footerDiv footerImage">
                    <img className="footer-Img" src={footerImg}/>
                </div>

            <div className="footerDiv socialMedia">
              <h3>Social Media Links</h3>
                 <ul>
                     <li><a href="#" title="Facebook.com">Home</a></li>
                     <li><a href="www.pinterest.com" title="Pinterest.com" target="_blank">About Us</a></li>
                     <li><a href="#" title="Facebook.com">Navigation</a></li>
                     <li><a href="www.pinterest.com" title="Pinterest.com" target="_blank">Menu</a></li>
                 </ul>
            </div>
            <div className="footerDiv contactContainer">
            <h3>Contact us</h3>
          <ul>
              <li><a href="#" title="Facebook.com">Address</a></li>
              <li><a href="#" title="Pinterest.com">Phone Number</a></li>
              <li><a href="#" title="Pinterest.com">Email</a></li>
          </ul>
            </div>
            <div className="footerDiv doorMatContainer">
            <h3>Doormat Navigation</h3>
          <ul>
              <li><a href="#" title="Facebook.com">Navigation</a></li>
              <li><a href="#" title="Pinterest.com">Address</a></li>
              <li><a href="#" title="Facebook.com">Login</a></li>
              <li><a href="#" title="Pinterest.com">Order Online</a></li>
          </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;