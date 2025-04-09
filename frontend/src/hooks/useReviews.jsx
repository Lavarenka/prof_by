import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../API/api';

const processReviewsData = (data) => {
  if (!data) return [];

  return data.map(review => {
    // Обрабатываем URL изображения
    let imageUrl = review.image || '';
    
    // Добавляем http:// если URL относительный и не начинается с http(s)://
    if (imageUrl && !imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      imageUrl = `http://${imageUrl}`;
    }

    return {
      ...review,
      image: imageUrl || null,
      hasImageError: !imageUrl, // Флаг ошибки, если изображения нет
      isFallback: !imageUrl
    };
  });
};

export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      try {
        const data = await getReviews();
        return processReviewsData(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        return [
          {
            id: 'fallback',
            name: 'Не удалось загрузить отзывы',
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