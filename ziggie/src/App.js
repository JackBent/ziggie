import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api/travelAdvisorAPI';

import Header from './compenents/Header/Header';
import List from './compenents/List/List';
import Map from './compenents/Map/Map';



const App = () => {
    const[places, setPlaces] = useState([]);
    const[coords, setCoods] = useState({});
    const[bounds, setBounds] = useState(null);

    useEffect(() => {
        getPlacesData().then((data) => {
            setPlaces(data)  
            console.log(data)         
        })
    }, [])

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style= {{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                     
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;