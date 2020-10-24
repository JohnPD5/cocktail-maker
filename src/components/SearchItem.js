import React from 'react'

const SearchItem = (props) => {
    return(
        <div className="search-item">
            <h3 className="search-item__name">{props.name}</h3>
            <img src={props.img} alt={props.name}/>
        </div>
    )
}

export default SearchItem