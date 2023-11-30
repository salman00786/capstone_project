 import bruchetta from "../Image/bruchetta.svg";
 import lemonDessert from "../Image/lemon dessert.jpg";
 import greekSalad from "../Image/greek salad.jpg";
 
 function Main(){
    return(
        <main className="">
          <div className="mainMenu">
          <div className="mainMenuContainer">
          <h1>This weeks specials!</h1>
          <div className="menuBtnContainer">
            <button className="menuBtn">Online Menu</button>
          </div>
          </div>
          <div className="menu-list">
           <div className="menuItems menuItem-1">
            <img className="itemsImage" src={greekSalad}></img>
            <div className="itemC">
            <h3>Greek Salad</h3>
            <p className="p1">The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p>Order a delivery</p>
            </div>
            </div>
            <div className="menuItems menuItem-2">
            <img className="itemsImage" src={bruchetta}></img>
            <div className="check">
            <h3 >Bruchetta<a className="oh">$4.5</a></h3>
            <p >The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p className="texting">Order a delivery</p>
            </div>
            </div>
            <div className="menuItems menuItem-3">
            <img className="itemsImage ig3" src={lemonDessert}></img>
            <div>
            <h3>Lemon Dessert</h3>
            <p>The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p>Order a delivery</p>
            </div>
            </div>
          </div>
          </div>
          <div className="main-Center">
            <h3 className="center">
              Testimonials
            </h3>
          </div>
      </main>
   
      
    )
 }

 export default Main;