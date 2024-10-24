"use client";

import React, { useState } from "react";
import Image from 'next/image'
import styles from './imagebox.module.css';

interface ImageBoxProps {
    src: string;
    alt: string;
}

export const ImageBox: React.FC<ImageBoxProps> = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.imageContainer}>
            <div className={`${styles.imageWrapper} ${loading ? styles.loading : ''}`}>
                {loading && (
                    <div role="status" className={styles.loader}>
                        <svg className={styles.loaderIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#D3D3D3" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                )}
                <Image
                    src={src}
                    alt={alt}
                    width={1280}
                    height={720}
                    layout="responsive"
                    className={styles.image}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
        </div>
    );
};