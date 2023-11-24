import "./footer.css"

import{Link} from "react-router-dom"
export default function Footer(){
    return(
        <footer >
                    <h2 >Tailor</h2>
            <div className="footer-details">
                
            <ul>
                <h4>Quick Links</h4>
              <li>               
              <Link to="/" className="links">Home</Link>
              </li>
              <li>               
              <Link to="/booking" className="links">Booking</Link>

              </li>
              <li>       
              <Link to="/review" className="links">Review</Link>
        
              </li>
            
                
                
               
            </ul>
            <ul >
                <h4>Contact Us</h4>
                <li><i className="fa-solid fa-phone"></i>9876543210</li>
                <li><i className="fa-solid fa-phone"></i>9876567873</li>
                <li><i className="fa-solid fa-envelope"></i><a href = "mailto: abc@gmail.com">abc@gmail.com</a></li>
                <li><i className="fa-solid fa-envelope"></i><a href = "mailto: xyz@gmail.com">xyz@gmail.com</a></li>
               
            </ul>
            <ul >
                
                <li><a href="https://twitter.com" rel="noopener"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://youtube.com" ><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://instagram.com" ><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://facebook.com" ><i className="fa-brands fa-facebook"></i></a></li>
            </ul>
            </div>
        </footer>
    )
}