import React from 'react'
import '../style/Detail.css'

const Detail = (props) => {
    let ingredients = []
    if(Object.keys(props.info.ingredients).length > 0) {
        for(const key in props.info.ingredients) {
            ingredients.push(
                <li key={key} className="ingredient">
                    <span className="ingredient__name">{key}:</span>
                    <span className="ingredient__measure">{props.info.ingredients[key]}</span>
                </li>
            )
        }
    }

    return(
        <div id={props.info.id} className="detail">
            <img src={props.info.imgUrl} alt={props.info.name}/>
            <div className="detail__info">
                <h3 className="detail__name">{props.info.name}</h3>
                <div className="detail__desc">
                    <span className="detail__type">{props.info.type}</span>
                    <span className="detail__glass">{props.info.glass}</span>
                </div>
                <ul className="detail__ingredients">{ingredients}</ul>
                <span className="detail__instructions">{props.info.instructions}</span>
            </div>
        </div>
    )
}

export default Detail