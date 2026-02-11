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
            <div className="flex justify-center items-center h-full w-full">
                <div className={styles.wrapper}>
                    <div className={styles.wrapperBody}>
                        <div className="mainContent">
                            <img src={BallImage.src} />
                        </div>
                        <div className={styles.contentDetails}>
                            <p>Nike Ball</p>
                            <p>
                                <Icon name="star" />
                                <Icon name="star" />
                                <Icon name="star" />
                            </p>
                            <p>Php 2,000.00</p>
                            <p>Stocks: 1</p>
                            <div className={styles.actions}>
                                <Button variant="contained" color="success">
                                    Add Quantity
                                </Button>
                                <Button variant="contained" color="error">
                                    <Icon name="delete" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.productImages}>
                            <div className={styles.productImg}>
                                <img src={BallImage.src} />
                            </div>
                            <div className={styles.productImg}>
                                <img src={BallImage.src} />
                            </div>
                              <div className={styles.productImg}>
                                <img src={BallImage.src} />
                            </div>
                              <div className={styles.productImg}>
                                <img src={BallImage.src} />
                            </div>
                        </div>
                        <div className="spacer">&nbsp;</div>
                    </div>
                </div>
            </div>
        </>
    )
}