
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import res from './apiFooter.jsx'

export default function FooterSection2() {
    const [contacts, setContacts] = useState([]);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок

    useEffect(() => {
        // Создаем массив запросов
        const contactsRequest = axios.get('/api/contacts/');
        const linksRequest = axios.get('/api/contacts/links/');

        // Выполняем все запросы параллельно
        Promise.all([contactsRequest, linksRequest])
            .then(([contactsResponse, linksResponse]) => {
                setContacts(contactsResponse.data);
                setLinks(linksResponse.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // Отображение состояния загрузки
    if (loading) return <div>Загрузка...</div>;

    // Отображение ошибки
    if (error) return <div>Ошибка: {error.message}</div>;



    return res({contacts, links})
}