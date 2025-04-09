import axios from 'axios';

// Запрос для ссылок
export const getContactLinks = async () => {
    const response = await axios.get('http://5.129.206.62:8000/api/contacts/links/');
    return response.data;
};

// Запрос для контактов
export const getContacts = async () => {
    const response = await axios.get('http://5.129.206.62:8000/api/contacts/');
    return response.data;
};

// Запрос для контента
export const getContent = async () => {
    const response = await axios.get('http://5.129.206.62:8000/api/content/');
    return response.data;
};

// Запрос для профессий 
export const getProfessions = async () => {
    const response = await axios.get('http://5.129.206.62:8000/api/professions/');
    return response.data;
};

// Запрос для профессий 
export const getReviews = async () => {
    const response = await axios.get('http://5.129.206.62:8000/api/reviews/');
    return response.data;
};