import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080';

export const fetchGreeting = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
};