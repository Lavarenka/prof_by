import './ReviewsSection.css'
import { Carousel, Spin, Alert } from 'antd';
import { useReviews } from '../../hooks/useReviews';






export default function ReviewsSection() {
    const { data: reviews, isLoading, error } = useReviews();


    if (isLoading) return (
        <div className="flex justify-center items-center h-[200px]">
            <Spin size="large" />
        </div>
    );
    if (error) return <Alert message={`Ошибка: ${error.message}`} type="error" />;

    return (
        <div className="review_section p-10" id="Review">
            <div className="fix_block">
                <div className="my-10 flex  justify-center"><h2 className='text-xl font-semibold'>Отзывы</h2></div>
                <div className="">
                    <Carousel arrows autoplay infinite={true} dots={false}>
                        {reviews.map((review) => (
                            <div key={review.id}>
                                <div >
                                    <div className=" image-container_review  m-auto my-5">{review.image && (
                                        <img
                                            src={review.image}
                                            alt={`Фото ${review.name}`}

                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    )}</div>
                                    <div className="px-5">
                                        <div className="text-center text-xl font-semibold my-2">{review.name}: {review.profession}</div>
                                        <div className="italic text-center ">{review.review}</div>
                                    </div>
                                </div>
                            </div>



                        ))}


                    </Carousel>
                </div>

            </div>
        </div>
    )
}



