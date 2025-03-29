import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UrlApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/api/reviews/';
    
    axios.get(apiUrl)
      .then((response) => {
        // Форматируем URL изображений
        const formattedData = response.data.map(item => ({
          ...item,
          image: item.image 
            ? item.image.startsWith('http') 
              ? item.image 
              : `http://${item.image}` // Добавляем http://
            : null
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  if (!data) return <div>Нет данных</div>;

  return (
    <div>
      <h1>Отзывы</h1>
      {data.map((item) => (
        <div key={item.id} >
          {item.image && (
            <img 
              src={item.image}
              alt={`Фото ${item.name}`}
              
              onError={(e) => {
                console.error('Не удалось загрузить изображение:', e.target.src);
                e.target.src = 'https://via.placeholder.com/200';
                e.target.style.border = '2px solid #ff0000'; // Красная рамка при ошибке
              }}
            />
          )}
          <div style={{ textAlign: 'left' }}>
            <p><strong>Имя:</strong> {item.name}</p>
            <p><strong>Профессия:</strong> {item.profession}</p>
            <p><strong>Отзыв:</strong> {item.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}