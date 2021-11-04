import React from "react";


const Planet = ({ search }) => {

    return(
        search.error ? (
                    <>
                        <h1>
                            {search.error}
                        </h1>
                        <img width = "250px" height = "250px" src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960" alt="Obi Wan" />
                    </>
                        )
                    :
        <div>
            <h1>{ search.name }</h1>
            <br></br>
            <h3>Climate: { search.climate }</h3>
            <h3>Terrain: { search.terrain }</h3>
            <h3>Surface Water: { search.surface_water ? "True" : "False"}</h3>
            <h3>Population: { search.population }</h3>
        </div>
    )
}


export default Planet