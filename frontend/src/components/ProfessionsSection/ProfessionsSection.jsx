import './ProfessionsSection.css'
import { Button, Spin, Alert } from "antd";
import FadeComponent from '../FadeComponent';
import { useProfessions } from '../../hooks/useProfessions';


export default function ProfessionsSection() {
    const { data: professions, isLoading, error } = useProfessions();


    // Обработка состояний загрузки и ошибки
    if (isLoading) return (
        <div className="flex justify-center items-center h-[200px]">
            <Spin size="large" />
        </div>
    );


    if (error) return <Alert message={`Ошибка: ${error.message}`} type="error" />;


    return (
        <div className="prof_section md:my-15 my-5 p-2" id="Profession">
            <div className="fix_block ">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Список профессий на выбор:</h2></div>

                <div className="grid md:grid-cols-5 md:gap-5 grid-cols-2 gap-2 ">
                    {professions.map((profession, index) => (
                        <FadeComponent key={profession.id} direction="bottom" delay={100 + (index * 50)}>
                            <div className="m-auto my-3" >
                                <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 ">
                                    <img
                                        src={profession.image}
                                        alt={`Фото ${profession.name}`}
                                        onError={(e) => {
                                            // Дополнительная обработка ошибки на уровне компонента
                                            e.target.src = 'https://via.placeholder.com/200';
                                            e.target.classList.add('error-image');
                                        }}
                                    />
                                </div>
                                <div className="text-center"><p>{profession.name}</p></div>
                            </div>
                        </FadeComponent>
                    ))}
                </div>
                <div className="my-5 text-center"><h2>Вы можете предложить свой вариант</h2></div>
                <div className="flex  justify-center">
                    <a href="#form"><Button className="md:w-100 ">Участвую</Button></a>

                </div>
            </div>
        </div >
    )
}