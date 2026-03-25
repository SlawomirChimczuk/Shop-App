import axios from "axios";
import { useNavigate } from "react-router";
import styles from './basket.module.css';
import style from "../../additional.module.css";
import { basketItemsContext } from "../../context/BasketItemsProvider";
import { useContext, useEffect } from "react";
import { useState } from "react";

export default function BasketPriceSummary(){
    const { basketItems, loadBasket } = useContext(basketItemsContext);
    const navigate = useNavigate();

    const createOrder = async () => {
        await axios.post('http://localhost:5000/orders', {

        });
        await loadBasket();
        navigate('/orders')
    }

    const [itemsSummary, setItemsSummary] = useState([]);

    useEffect(() => {
        setItemsSummary(basketItems)
    },[basketItems])

    const itemsFullPrice = itemsSummary.reduce((acc, obj) => acc + obj.quantity * obj.price, 0); 
    const itemsTaxPrice = Math.floor(itemsFullPrice * 0.12);
    const totalPrice = itemsFullPrice + itemsTaxPrice + 10;
    

    return(
        
        <div className={styles.basketPaymentSummary}>
            <div className={styles.basketPaymentSummaryTitle}>
                Price Summary
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Items Price: </div>
                <div className={styles.basketPaymentSummaryPrice}>£ {itemsFullPrice}</div>
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Delivery Price:</div>
                <div className={styles.basketPaymentSummaryPrice}>£ 10</div>
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Tax (12%):</div>
                <div className={styles.basketPaymentSummaryPrice}>£ {itemsTaxPrice}</div>
            </div>

            <div className={`${styles.basketPaymentSummaryLine} ${styles.fullLine}`}>
                <div>Total Price:</div>
                <div className={styles.basketPaymentSummaryPrice}>£ {totalPrice}</div>
            </div>

            <button className={`${styles.basketOrder} ${style.mainButton}`}
                onClick={createOrder}
            >
                Place an order
            </button>
        </div>
    )
}