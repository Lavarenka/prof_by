import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin, Alert } from 'antd';


export default function ContactLinksApi() {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/contacts/links/');
                setLinks(response.data);
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFooterData();

        // Опционально: функция очистки для отмены запроса
        return () => {
            // Здесь можно добавить отмену запроса, если используете AbortController
        };
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <Spin tip="Загрузка..." size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <>
                {`Не удалось загрузить данные: ${error.message}`}
            </>
        );
    }

    if (!links.length) {
        return <div className="no-data">Нет данных для отображения</div>;
    }

    return (
        <>
            {links.map((item) =>
                <div key={item.id}>
                    <a href={item.url}> <i className={item.icon}></i></a>
                </div>

            )}
        </>
    );
}