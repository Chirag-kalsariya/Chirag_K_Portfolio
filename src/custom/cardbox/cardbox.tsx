import React from "react";
import styles from "./cardbox.module.css";

interface CardBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CardBox: React.FC<CardBoxProps> = ({ children, ...props }) => {

    return (
        <div className={styles.customCard} {...props}>
            {children}
        </div>
    );
};

export default CardBox;
