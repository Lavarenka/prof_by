import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UrlApi() {
  const [data, setData] = useState(null); // Состояние для хранения данных
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для хранения ошибок

  useEffect(() => {
    // URL бэкенда
    const apiUrl = 'http://localhost:8000/api/contacts/';

    // Выполняем запрос
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data); // Сохраняем данные в состояние
        setLoading(false); // Загрузка завершена
      })
      .catch((error) => {
        setError(error); // Сохраняем ошибку
        setLoading(false); // Загрузка завершена
      });
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся один раз

  // Отображение состояния загрузки
  if (loading) return <div>Загрузка...</div>;

  // Отображение ошибки
  if (error) return <div>Ошибка: {error.message}</div>;

  // Отображение данных
  return (
    <div>
      <h1>Данные из бэкенда</h1>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        {data.map((item) => (
            <>
            <p>name: {item.name}</p>

                <br/>
            </>


        ))}
    </div>
  );
}

