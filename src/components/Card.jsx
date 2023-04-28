import React from "react"

const Card = (props) => {

    console.log(props)
    return(
       

           <div className="card__section">
                {/* <div className="badget">Sold Out && Online</div> */}
                <img className="main--image" src={`/${props.coverImg}`}></img>
             <div className="card-stats">
                <img className="star--icon" src="/star.png" alt="start icon"></img> <span>{props.stats.rating}</span>
                <span>({`${props.stats.reviewCount}`}) ● {`${props.location}`}</span>
                <p>{props.title}</p>         
                <p>From {`$${props.price}`} / <span>person</span></p>
             </div>   
            </div> 


    
    )


}

export default Card
