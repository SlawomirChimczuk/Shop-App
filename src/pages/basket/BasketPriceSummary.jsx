// import styles from './basket.module.css';
import { basketItemsContext } from "../../context/BasketItemsProvider";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { toDecimal } from "../../utils/price";

export default function BasketPriceSummary({ getPriceSummary = () => {}, styles }){
    const { basketItems } = useContext(basketItemsContext);

    const [itemsSummary, setItemsSummary] = useState([]);

    useEffect(() => {
        setItemsSummary(basketItems)
    },[basketItems])

    const itemsFullPrice = itemsSummary.reduce((acc, obj) => acc + obj.quantity * obj.price, 0); 
    const itemsTaxPrice = Math.floor(itemsFullPrice * 0.12);
    const totalPrice = itemsFullPrice + itemsTaxPrice + 1000;

    useEffect(() => {
        getPriceSummary([{'itemPrice': itemsFullPrice, 'deliveryPrice': 10,'itemTax': itemsTaxPrice, 'totalPrice': totalPrice}]);
     }, [getPriceSummary, itemsFullPrice, itemsTaxPrice, totalPrice]);

    return(
        
        <div className={styles.basketPaymentSummary}>
            <div className={styles.basketPaymentSummaryTitle}>
                Price Summary
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Items Price: </div>
                <div className={styles.basketPaymentSummaryPrice}> {toDecimal(itemsFullPrice)}</div>
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Delivery Price:</div>
                <div className={styles.basketPaymentSummaryPrice}> {toDecimal(1000)}</div>
            </div>

            <div className={styles.basketPaymentSummaryLine}>
                <div>Tax (12%):</div>
                <div className={styles.basketPaymentSummaryPrice}> {toDecimal(itemsTaxPrice)}</div>
            </div>

            <div className={`${styles.basketPaymentSummaryLine} ${styles.fullLine}`}>
                <div>Total Price:</div>
                <div className={styles.basketPaymentSummaryPrice}> {toDecimal(totalPrice)}</div>
            </div>
        </div>
    )
}