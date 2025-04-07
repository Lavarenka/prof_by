import './ProfessionsSection.css'
import { Button } from "antd";
import ProfessionsApi from '../../API/ProfessionsApi.jsx';


export default function ProfessionsSection() {


    return (
        <div className="prof_section md:my-15 my-5 p-2" id="Profession">
            <div className="fix_block ">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Список профессий на выбор:</h2></div>

                <div className="grid md:grid-cols-5 md:gap-5 grid-cols-2 gap-2 ">
                    <ProfessionsApi />
                </div>
                <div className="my-5 text-center"><h2>Вы можете предложить свой вариант</h2></div>
                <div className="flex  justify-center">
                    <a href="#form"><Button className="md:w-100 ">Участвую</Button></a>

                </div>
            </div>
        </div >
    )
}