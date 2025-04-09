import { useState, useEffect } from 'react';
import axios from 'axios';
import './FormSection.css';

export default function FormSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '+375',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        type: '', // 'success' | 'error'
        message: ''
    });

    // Автоматическое скрытие уведомления через 5 секунд
    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification(prev => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification.show]);

    const validatePhone = (phone) => {
        if (!phone.startsWith("+375") || phone.length !== 13) {
            return 'Номер должен быть в формате +375XXXXXXXXX (12 цифр)';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Валидация телефона
        const phoneError = validatePhone(formData.phone);
        if (phoneError) {
            setErrors({ phone: phoneError });
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Формируем данные для x-www-form-urlencoded
            const formPayload = new URLSearchParams();
            formPayload.append('name', formData.name);
            formPayload.append('phone', formData.phone);
            formPayload.append('message', formData.message || "Без примечания");

            const response = await axios.post(
                'http://5.129.206.62:8000/api/clients/',
                formPayload.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );

            // Успешная отправка
            setNotification({
                show: true,
                type: 'success',
                message: 'Данные успешно отправлены!'
            });
            setFormData({ name: '', phone: '+375', message: '' });

        } catch (error) {
            // Ошибка отправки
            console.error('Ошибка:', error);
            setNotification({
                show: true,
                type: 'error',
                message: error.response?.data?.detail || 'Ошибка при отправке формы'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form_section" id='form'>
            <div className="fix_block">
                <div className="my-50">
                    <div className="text-center my-5">
                        <p className="text-2xl font-extrabold">
                            Готовы попробовать себя в новой профессии или хотите получить консультацию?
                        </p>
                    </div>
                    <div className="text-center my-5">
                        <p className="text-xl font-semibold">
                            Введите свои данные и наш специалист свяжется с вами.
                        </p>
                    </div>

                    {/* Форма */}
                    <form onSubmit={handleSubmit} className="consultation__form">
                        {/* Поле имени */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Имя"
                            className={`consultation__input _req ${errors.name ? 'error-field' : ''}`}
                            required
                        />

                        {/* Поле телефона */}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => {
                                let value = e.target.value;
                                if (!value.startsWith('+') && value.length > 0) {
                                    value = '+' + value;
                                }
                                setFormData({ ...formData, phone: value });
                            }}
                            placeholder="+375XXXXXXXXX"
                            className={`consultation__input _req ${errors.phone ? 'error-field' : ''}`}
                            maxLength={13}
                            required
                        />


                        {/* Поле сообщения */}
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Примечание (необязательно)"
                            className="consultation__input"
                        />

                        {/* Кнопка отправки */}
                        <button
                            type="submit"
                            className="consultation__button _button submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                    {errors.phone && (
                        <p className="error-text text-center">{errors.phone}</p>
                    )}
                </div>
            </div>

            {/* Всплывающее уведомление */}
            {notification.show && (
                <div className={`notification ${notification.type} ${notification.show ? 'show' : ''}`}>
                    <div className="notification-content">
                        {notification.message}
                        <button
                            className="notification-close"
                            onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}