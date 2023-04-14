import img1 from "../images/facebook.svg"
import img2 from "../images/twitter.svg"
import img3 from "../images/linkedin.svg"
import img4 from "../images/google.svg"
import img5 from "../images/youtube.svg"


export default function Contact(){
    return (
        <div className="contact-us">
            <div>
                <h3>Contact Us</h3>
                <a>Springboard-Support@Infosys.com</a>
            </div>
            <div className="social-media">
                <div className="social-media-icons">
                    <a href="#"><img className="s-icon" src={img1}></img></a>
                    <a href="#"><img className="s-icon" src={img2}></img></a>
                    <a href="#"><img className="s-icon" src={img3}></img></a>
                    <a href="#"><img className="s-icon" src={img4}></img></a>
                    <a href="#"><img className="s-icon" src={img5}></img></a>
                </div>
                <div className="s-links">
                    <a href="">Mobile Apps</a>
                    <a href="">Terms of use</a>
                    <a href="">Help & Contact</a>
                </div>
            </div>
        </div>
    )
}