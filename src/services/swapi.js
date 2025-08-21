import axios from "axios";

const API_BASE_URL = 'https://swapi.py4e.com/api/';

export const fetchEntities = async (type, page = 1)=>{
    try {
        const response = await axios.get(`${API_BASE_URL}${type}/?page=${page}`);
        return response.data;
    }catch (error){ 
        console.error(`Error fetching ${type}: `, error);
        throw error;
        
    }
};

export const fetchEntityDetails = async (url)=>{
    try {
        const response = await axios.get(url);
        return response.data;
    }catch (error){
        console.error(`Error fetchinh entity details: `, error);
        throw error;
    }
};