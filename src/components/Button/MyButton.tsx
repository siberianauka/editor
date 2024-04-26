import React, { useEffect } from 'react';
import styles from './MyButton.module.css';
import { useTabContext } from '../../provider/TabContext';


interface MyButtonProps {
    label: string;
    onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
    const { activeTab, setActiveTab } = useTabContext();

    // Обработчик клика, который обновляет активную вкладку
    const handleClick = () => {
        setActiveTab(label.toLowerCase()); // Устанавливаем активную вкладку
        console.log(label)
        onClick(); // Вызываем оригинальный обработчик onClick
    };

    // Используем useEffect для отслеживания изменений activeTab
    useEffect(() => {
        // Здесь можно выполнить любые действия после обновления activeTab
        console.log('Active tab updated:', activeTab);
    }, [activeTab]); // Зависимость от activeTab

    // Применяем стиль active__button, если label кнопки соответствует активной вкладке
    const isActive = activeTab.toLowerCase() === label.toLowerCase();

    return (
        <button
            onClick={handleClick}
            className={`${styles.header__button} ${isActive ? styles.active__button : ''}`}
        >
            {label}
        </button>
    );
};

export default MyButton;
