import axios from 'axios'
import { apiKey } from '../config/config'

const getCityToSave = async (city, api) => {
    
    const url = `${api}/current?access_key=${apiKey}&query=${city}`
    const { data } = await axios.get(url);

    return data;
}

export default getCityToSave