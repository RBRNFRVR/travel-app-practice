import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'

const PlaceDetails = ({place})=> {
    const classes = useStyles();

    return(
       <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={place.photo?place.photo.images.large.url:require('/Users/rbrnfrvr/travel-app/src/images/jason-leung-poI7DelFiVA-unsplash.jpg')}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name?place.name:'Some Place'}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Prices</Typography>
                    <Typography  gutterBottom variant="subtitle1">{place.price_level?place.price_level:'$'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography  gutterBottom variant="subtitle1">{place.ranking?place.ranking:'some ranking'}</Typography>
                </Box>
                
            </CardContent>
       </Card>
    );
}

export default PlaceDetails;