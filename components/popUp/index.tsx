import React, { useState } from 'react';
import styles from './style.module.scss';

interface PopUpProps {
    setIsOpen: (value: boolean) => void;
    children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ setIsOpen, children }) => {
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.popup} onClick={() => { setIsOpen(false) }}>
            <div className={styles.popup__content} onClick={handleContentClick}>
                {children}
            </div>
        </div>
    );
};

export default PopUp;