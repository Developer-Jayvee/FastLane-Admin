import styles from "@/app/orders/styles/containers.module.css"
import Table from "@/components/features/Table";
import {
    ORDER_HEADERS,
    LATEST_ORDER_HEADERS
} from "@/constants/index"
import PBComponent from "./components/PBComponent";
const Orders = () => {

    return (
        <>
            <div className="wrapper">
                <div className={styles.containerGrid}>
                    <div className="list-container">
                        <Table headers={ORDER_HEADERS}>

                        </Table>
                    </div>
                    <div className="summary-container">
                        <p>Top 3 Products</p>
                        <ul className="list-container">
                            <li>
                                Ball
                                <PBComponent />
                            </li>
                            <li>
                                Shoes
                                <PBComponent />
                            </li>
                        </ul>
                    </div>
                    <div className="latest-container">
                        <p>Latest Orders</p>
                        <Table headers={LATEST_ORDER_HEADERS}>
                            
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;