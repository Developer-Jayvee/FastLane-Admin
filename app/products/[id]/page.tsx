"use client"

import { useParams } from "next/navigation"
import BallImage from "@/public/images/products/ball_image.png"
import { Icon } from "@/hooks/useIcons";
import { Button } from "@mui/material";
import styles from "@/app/products/[id]/product.module.css"
export default function ProductDetails() {
    const params = useParams();
    const { id } = params
    return (
        <>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className="wrapper-body">
                    <div className={styles.imageHolder}>
                        <div className={styles.mainImage}>
                          <img src={BallImage.src} alt="Ball Image" />
                        </div>
                        <div className={styles.imageChoices}>
                             <img src={BallImage.src} alt="Ball Image" />
                              <img src={BallImage.src} alt="Ball Image" />
                               <img src={BallImage.src} alt="Ball Image" />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <p>Nike Ball</p>
                        <p >
                            <Icon name="star" />
                            <Icon name="star" />
                            <Icon name="star" />
                            <Icon name="star" />
                        </p>
                        <p>Php 2,000.00</p>
                    </div>
                </div>
                <div className={styles.wrapperFooter}>
                    <div className={styles.wrapperActions}>
                        <Button variant="contained" color="success">
                            Add Quantity
                        </Button>
                        <Button variant="contained" color="error">
                            <Icon name="delete"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}