import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useHistory, Link, Switch, Route } from "react-router-dom"
import People from './components/People';
import Planet from './components/Planets';

function App() {

// The variable search is used to determine what category the user is attempting to look up
const [search, setSearch] = useState("")


// The variable id is used to determine which planet or person the user is attempting to look up
const [id, setID] = useState(1)


// The variable apiData is used to both set the hold the data that is brought in
// from the api request and move the date to the routes in Lines 68 and 74.
const [apiData, setApiData] = useState({})


// The variable history is used to hold the results of the form below and send the user 
// to the correct webpage.
const history = useHistory()
// console.log(history);


// The function axiosSearch uses the 'search' and 'id' data submitted in the form to create
// a dynamic api request that pulls on the information asked for 
const axiosSearch = () => {
  axios.get(`https://swapi.dev/api/${ search }/${ id }`)
  .then(res => {
      setApiData(res.data)
      console.log(res.data)
  })
  .catch(error => {
    error = {error: "These aren't the droids you're looking for"};
    setApiData(error)
});
}


// The function launchPage uses 'history' to redirect the user to a specific webpage once
// the form has been submitted.
const launchPage = (e) => {
  e.preventDefault();
    history.push(`/${ search }/${ id }`)
}

  return (
    <div className="App">
      <p className = "inline-block">
        <form onSubmit = {launchPage}>
        <label>Search For:</label>
          <select onChange = { (e) => setSearch(e.target.value) } value = { search }>
            <option disabled>Choose...</option>  
            <option value = "people">people</option>
            <option value = "planets">planets</option>
          </select>
          <br/>
          <label>ID:</label>
          <input type = "number" min = "1" max = "82" onChange = { (e) => setID(e.target.value) } value = { id }></input>
          <button onClick = {axiosSearch}>Go</button>
        </form>
      </p>

      <Switch>
        <Route exact path = "/people/:id">
          <People
            search = { apiData }
            setSearch = { setApiData }
          />
        </Route>
        <Route exact path = "/planets/:id">
          <Planet
            search = { apiData }
            setSearch = { setApiData }
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
