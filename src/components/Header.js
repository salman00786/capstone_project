import React,{useState} from "react";
import restaurantPic from "../Image/restauranfood.jpg"

function Header(){
    const [name, setName] = useState("");
    return(
        <div className="main">
        <div className="main-container">
            
        <div className="flex-main-container">
           

        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/><br/>
            <div>
            <button className="btnSubmit" onClick={()=>{setName(console.log( "Clicked!"))}}>Reserve a Table</button>
            </div>

        </article>
        
        <div className="boxImg">
            <img className="restPic" src={restaurantPic}/>
            </div>
        
        </div>
        
        
        </div>

        </div>
    )
}

export default Header;