import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin, Alert } from 'antd';


export default function ContentsApi() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/content/');
                setContents(response.data);
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
                {`Не удалось загрузить Контакты`}
            </>
        );
    }

    if (!contents.length) {
        return <div className="no-data">Нет данных для отображения</div>;
    }

    return (
        <>
            {contents.map((item) =>
                <div key={item.id} className='flex items-center justify-center'>
                    <p className="oldstyle-nums">{item.title} </p>
                </div>
            )}
        </>
    );
}