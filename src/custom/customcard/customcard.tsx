import React from "react";
import styles from "./customcard.module.css";

interface CustomCardProps {
    iconComponent: React.ReactNode;
    iconLabel: string;
    cardLink: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ iconComponent, iconLabel, cardLink }) => {

    return (
        <div className={styles.customCard} onClick={() => window.open(cardLink, "_blank")}>
            <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                    {iconComponent}
                </div>
                <span>{iconLabel}</span>
            </div>
        </div>
    );
};

export default CustomCard;
