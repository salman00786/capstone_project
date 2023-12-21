 import bruchetta from "../Image/bruchetta.svg";
 import lemonDessert from "../Image/lemon dessert.jpg";
 import greekSalad from "../Image/greek salad.jpg";
 import starRatings from "../Image/fourStarImg.png";
 import userPrfile from "../Image/userProfile.png"
 import chefPic from "../Image/Mario and Adrian b.jpg"
 
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
            <div className="check">
            <h3>Greek Salad<a className="oh">$4.5</a></h3>
            <p className="p1">The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p className="texting">Order a delivery</p>
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
            <div className="check">
            <h3>Lemon Dessert <a className="oh">$4.5</a></h3>
            <p>The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p className="texting">Order a delivery</p>
            </div>
            </div>
          </div>
          </div>
          <div className="main-Center">
            <h3 className="center">
              Testimonials
            </h3>
            <div className="testimonial-menu">
              <div className="starRating tItems">
                <h3>
                  Star Ratings
                </h3>
                <p>We are a family owned Mediterranean</p>
                <img className="starRatingImg" src={starRatings}/>
                
              </div>
              <div className="userProfile tItems">
                <h3>User Profile</h3>
                
                <p>We are a family owned Mediterranean</p>
                <img className="userProfileImg" src={userPrfile}/>
              </div>
              <div className="photo tItems">
                <h3>Photo</h3>
                <p>We are a family owned Mediterranean</p>
                
              </div>
              <div className="review tItems">
                <h3>Review</h3>
                <p>We are a family owned Mediterranean</p>
              </div>
            </div>
          </div>
          <div className="chefMenu">
          <h2>Little Lemon</h2>
              <h3>Chicago</h3>
            <div className="flexChefMenu">
             
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <div className="chefImgContainer">
                <img className="chefImg" src={chefPic}/>
              </div>
            </div>
          </div>
      </main>
    )
 }

 export default Main;