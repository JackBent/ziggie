import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';



const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coords = { lat : 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB-9mK9avFE5-yPNs7OkeFhRPw-HolPTOA'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}>
                    

            </GoogleMapReact>
        </div>
       )
}

export default Map;