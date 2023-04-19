



export default function About(props) {
    return (
        <div className="card">
            <div className="font-card">
                <img src={props.image}></img>
            </div>
            <div className="back--card">
                <p>{props.p}</p>
            </div>x
        </div>
    )
}