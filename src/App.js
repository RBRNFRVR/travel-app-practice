import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {getPlacesData} from './api'

const App = () => {
  //set the data for the places, bounds, loading, and coordinates.
  const[places,setPlaces]= useState([]);
  const[childClicked, setChildClicked] = useState(null);
  const[coordinates, setCoordinates] = useState({});
  const[bounds, setBounds] = useState({});
  const[isLoading, setIsLoading]= useState(false);

  //to call on start of function
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng: longitude})
    })
  },[])

  //useEffect function is for calling the data whenever the coordinates or bounds are influenced.
  useEffect(()=>{
    setIsLoading(true);

    getPlacesData(bounds.sw, bounds.ne)
      .then((data)=>{
        setPlaces(data);
        setIsLoading(false);
      })
  },[coordinates, bounds]);

  return (
    <>
    <CssBaseline />
      <Header />
      <Grid container spacing={3} style ={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>  
        <Grid item xs={12} md={8}>
            <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
        </Grid>  
      </Grid>
    </>
  );
}

export default App;
