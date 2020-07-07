import axios from 'axios';

const accessToken = "Provide access token here from Superhero API";

export const getHeroById = (id) => {
    return (
        axios.get(`https://superheroapi.com/api/${accessToken}/${id}`)
    );
}
