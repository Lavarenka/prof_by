const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const response = await fetch(`${import.meta.env.VITE_API_URL}/your-endpoint`);
