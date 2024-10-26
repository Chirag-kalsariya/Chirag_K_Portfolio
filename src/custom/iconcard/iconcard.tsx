import React from "react";
import styles from "./iconcard.module.css";
import CardBox from "../cardbox/cardbox";

interface IconCardProps {
    iconComponent: React.ReactNode;
    iconLabel: string;
    cardLink: string;
}

export const IconCard: React.FC<IconCardProps> = ({ iconComponent, iconLabel, cardLink }) => {

    return (
        <CardBox onClick={() => window.open(cardLink, "_blank")}>
            <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                    {iconComponent}
                </div>
                <span>{iconLabel}</span>
            </div>
        </CardBox>
    );
};

export default IconCard;
