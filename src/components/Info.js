
import img from "../images/infoimage1.jpg"

export default function Info(){
    return (
        <div className="info">
        <div className="info--container">
            <div className="info--content">
                <p>The future of India will be shaped by today’s younger generation who need quality education through digital literacy, making them productive and self-reliant citiz
                    ens. 'Digital literacy' is the skills required to achieve digital competence and use of Informat
                    ion and Communication Technology (ICT) for work, leisure, learning
                     and communication. It does not replace traditional f
                     orms of literacy, instead complements and am
                     plifies the skills that form the foundation
                      of traditional forms.</p>
            </div>
            <div >
                 <nav className="info--images">
                        <img className="infoimage1" src={img}></img>
                 </nav>
            </div>
        </div>

        <button className="getstart-btn">GET STARTED</button>
        </div>
    )
}