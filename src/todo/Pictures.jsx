import yacht from "../pictures/yacht2.jpg";
import surf from "../pictures/surfing.jpg";
import mountain from "../pictures/matchu pikchu.jpg";
import thai from "../pictures/thailand.jpg";


export function Pictures() {

    return (
        <div id="all-pictures">
           
            <img 
           className="wishlist-img" src={yacht}></img>
            <img className="wishlist-img" src={thai} alt={thai}></img>
           
           
            <img className="wishlist-img" src={surf} alt={surf}></img>
            <img className="wishlist-img" src={mountain} alt={mountain}></img>
            
        </div>
    )
}