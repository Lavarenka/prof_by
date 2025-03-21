import './FormSection.css'

export default function FormSection() {
    return (
        <div className="form_section " id='form'>
            <div className="fix_block ">
                <div className="my-50">
                    <div className="text-center my-5"><p className="text-2xl font-extrabold">Готовы попробовать себя в новой профессии или хотите получить консультацию?</p></div>
                    <div className="text-center my-5"><p className="text-xl font-semibold">Введите свои данные и наш специалист свяжется с вами.</p></div>
                    <form action="#" id="form" className="consultation__form ">
                        <input autoComplete="off" required type="text" placeholder="Имя" name="form[]"
                               className="consultation__input _req _name "/>
                        <input autoComplete="off" required type="tel" placeholder="Номер телефона" name="form[]"
                               className="consultation__input _req"/>
                        <input autoComplete="off" required type="text" placeholder="Текст" name="form[]"
                               className="consultation__input"/>
                        <button type="submit" className="consultation__button _button submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}