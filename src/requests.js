import axios from 'axios';

export const getHeroById = (id) => {
    return (
        axios.get(`https://superheroapi.com/api/access-token/${id}`)
    );
}
