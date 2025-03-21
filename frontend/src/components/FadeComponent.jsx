import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

// <FadeComponent direction="left" delay={300}>Анимация слева с задержкой 300 мс</FadeComponent>
// <FadeComponent direction="right" delay={500}>Анимация справа с задержкой 500 мс</FadeComponent>
// <FadeComponent direction="top" delay={100}>Анимация сверху с задержкой 100 мс</FadeComponent>
// <FadeComponent direction="bottom" delay={700}>Анимация снизу с задержкой 700 мс</FadeComponent>

function FadeComponent({ children, direction = "left", delay = 200 }) {
    // Отслеживаем появление элемента в области видимости
    const [ref, inView] = useInView({
        triggerOnce: false, // Анимация сработает только один раз
        threshold: 0.1, // Элемент должен быть виден на 10%
    });

    // Определяем начальное смещение в зависимости от направления
    const getInitialTransform = (direction) => {
        switch (direction) {
            case "left":
                return "translateX(-50px)";
            case "right":
                return "translateX(50px)";
            case "top":
                return "translateY(-50px)";
            case "bottom":
                return "translateY(50px)";
            default:
                return "translateX(-50px)";
        }
    };

    // Определяем конечное смещение в зависимости от направления
    const getFinalTransform = (direction) => {
        switch (direction) {
            case "left":
            case "right":
                return "translateX(0)";
            case "top":
            case "bottom":
                return "translateY(0)";
            default:
                return "translateX(0)";
        }
    };

    // Анимация fade
    const fadeAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? getFinalTransform(direction) : getInitialTransform(direction),
        config: { mass: 1, tension: 200, friction: 20 },
        delay: inView ? delay : 0, // Задержка анимации
    });

    return (
        <div style={{ overflow: "hidden" }}> {/* Контейнер с overflow: hidden */}
            <animated.div ref={ref} style={fadeAnimation}>
                {children}
            </animated.div>
        </div>
    );
}

export default FadeComponent;