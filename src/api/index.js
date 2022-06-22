import axios from "axios";

const apiUrl='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) =>{
    try{
        const {data:{data}} = await axios.get(apiUrl, {
            url: apiUrl,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'eaffb724e5msh1c243a7968cba7bp18e21bjsn62ea8fd4680b',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;

    }catch(error){
        console.log(error)
    }
}