import Card from "@/components/features/Card";
import { Icon } from "@/hooks/useIcons";
import BallImage from "@/public/images/products/ball_image.png"
import styles from "@/app/products/styles/card.module.css"
import Link from "next/link";
const products = () => {

    return (
        <>
            <div className="wrapper">
                <div className={styles.cardContainer}>
                    <Card customClass={styles.card} >
                        <div className={styles.imageContainer}>
                            <img src={BallImage.src} alt="Ball Image"/> 
                            <Link href="/products/1">
                                <Icon name="editpencil"/>
                            </Link>
                        </div>
                        <div className={styles.cardDetails}>
                            <p>Ball</p>
                            <p>2,000.00</p>
                            <p>
                                <Icon name="star"/>
                                <Icon name="star"/>
                                <Icon name="star"/>
                            </p>
                            <p>Stocks : 1</p>
                        </div>
                    </Card>
                    
                </div>
            </div>
        </>
    )
}

export default products;