
import img1 from "../images/ratinglogo.svg"
import img2 from "../images/settingslog.svg"
import img3 from "../images/timelogo.svg"


export default function Settinds() {
    return (
        <div className="settings">
            <div className="settings-detail">
                <img src={img1}></img>
                <p>Life Skills
                    Behavioral Skills</p>
            </div>
            <div className="settings-detail">
                <img src={img2}></img>
                <p>
                Core Skills
                    Digital Skills
                </p>
            </div>
            <div className="settings-detail">
                <img src={img3}></img>
                <p>Life Long Learning
                    Continuous Education</p>
            </div>
    </div>
    )
}