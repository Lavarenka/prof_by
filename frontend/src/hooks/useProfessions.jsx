import { useQuery } from '@tanstack/react-query';
import { getProfessions } from '../API/api';

const processProfessionsData = (data) => {
  if (!data) return [];

  return data.map(profession => {
    // Обрабатываем URL изображения
    let imageUrl = profession.image || '';
    
    // Добавляем http:// если URL относительный и не начинается с http(s)://
    if (imageUrl && !imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      imageUrl = `http://${imageUrl}`;
    }

    return {
      ...profession,
      image: imageUrl || 'https://via.placeholder.com/200',
      hasImageError: !imageUrl, // Флаг ошибки, если изображения нет
      isFallback: !imageUrl
    };
  });
};

export const useProfessions = () => {
  return useQuery({
    queryKey: ['professions'],
    queryFn: async () => {
      try {
        const data = await getProfessions();
        return processProfessionsData(data);
      } catch (error) {
        console.error('Error fetching professions:', error);
        return [
          {
            id: 'fallback',
            name: 'Не удалось загрузить профессии',
            image: 'https://via.placeholder.com/200',
            hasImageError: true,
            isFallback: true
          }
        ];
      }
    },
    staleTime: 60 * 60 * 1000,
    retry: 1
  });
};