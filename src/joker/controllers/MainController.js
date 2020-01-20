import Axios from 'axios';

export const getJokes = async(val) => {
    const response = await Axios.get(`https://api.icndb.com/jokes/random/${val}`);
    return response;
}
