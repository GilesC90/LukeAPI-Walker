import React from "react";


const People = ({ search }) => {

    return(
        <div>
            <h1>{ search.name }</h1>
            <br></br>
            <h3>Height: {search.height} cm</h3>
            <h3>Mass: { search.mass } kg</h3>
            <h3>Hair Color: { search.hair_color }</h3>
            <h3>Skin Color: { search.skin_color }</h3>
        </div>
    )
}
export default People