import React from "react"

const Card = (props) => {
    return(
        <div className="card__container">

           <div className="card__element">
                <div className="badget">Sold Out && Online</div>
                <img src="../public/katie-zaferes.png"></img>
                <img src="../public/star.png"></img>
                <span>5.0</span>
                <span>(6) ● USA</span>
                <p>Life lessons with Katie Zaferes</p>         
                <p>From 136$ / <span>person</span></p>   
            </div> 


        </div>
    )


}

export default Card
