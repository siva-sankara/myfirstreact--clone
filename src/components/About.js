



export default function About(props){
    return (
        <div className="about">
            
            <div className="card--container">
                <div className="card">
                    <div className="font-card">
                        <img src={`../images/${props.image}`}></img>
                    </div>
                    <div className="back--card">
                        <p>{props.p}</p>
                    </div>
                </div>
            </div>
       
       
       </div>
    )
}