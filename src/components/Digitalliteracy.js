
import img from "../images/laptop.jpg"
export default  function Digitalliteracy(){
    return (
        <nav className="digital--container">
            <h1>Why Digital Literacy</h1>
            <div className="digitalliteracy">
                <div className="digital-div-1">
                    <navbar className="navbar-numbers">
                        <a className="num1 num">1</a>
                        <a className="num2 num">2</a>
                        <a className="num3 num">3</a>
                        <a className="num4 num">4</a>
                    </navbar>
                    <p className="para">
                        i want top insret a text into the class wben ib want to clack the enxt button then i want to cgajbbge the tyext wwith i the vlock
                    </p>
                </div>
                <div className="digital-div-2">
                    <img className="laptop-img" src={img}></img>
                </div>
            </div>
        </nav>
    )
}