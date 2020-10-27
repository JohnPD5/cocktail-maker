import React from 'react'
import '../style/SearchItem.css'

const SearchItem = (props) => {
    return(
        <div id={props.id} className="search-item" onClick={props.getDetail}>
            <figure className="search-item__img">
                <img className="lazy" data-src={props.img} alt={props.name}/>
            </figure>
            <h3 className="search-item__name">{props.name}</h3>
        </div>
    )
}

export default SearchItem