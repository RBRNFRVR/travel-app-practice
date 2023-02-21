import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import  Rating  from '@material-ui/lab/Rating';
import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked})=> {
    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width:600px)')

    return(
        //Using the Google Map React Library in React to show all local restuarants in screen area of the map. If you drag anywhere else
        // the coordinates will change and new places will be displayed. If you then click on a location on the map screen then the 
        // onChildClick shall prompt and push that location information backup the component tree and will appear on the left. 
        // An awesome functionality and that took a bit to get the hang of.
        //BEGIN HERE
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw : e.marginBounds.sw})
                }}
                onChildClick={(child)=> setChildClicked(child)}
            >
        //END HERE
                {places?.map((place, index)=>(
                    <div className={classes.markerContainer} lat={place.latitude} lng={place.longitude} key={index}>
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ):(
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo?place.photo.images.large.url:require('/Users/rbrnfrvr/travel-app/src/images/jason-leung-poI7DelFiVA-unsplash.jpg')}
                                        alt={place.name}
                                    />
                                    <Rating size="small" value={Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
