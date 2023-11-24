import "./Review-card.css"
export default function Reviewcard(props){
    return(
        <div className="review-card"  
        >
            <h4>{props.name}</h4>
            <h3><i className="fa-solid fa-star"></i>  {props.rating} / 5</h3>
            <p>
                {props.review}
            </p>
        </div>
    )
}