import styles from './basket.module.css'
import { Link } from 'react-router'
import { basketItemsContext } from '../../context/BasketItemsProvider'
import { useContext } from 'react';
import ItemsSummary from './ItemsSummary';

export default function Basket(){
    
    const { basketItems } = useContext(basketItemsContext);

    return(
        <>
            <div>
                <div className={styles.basketHeader}>
                    <div className={styles.basketHeaderContent}>
                        <div className={styles.basketHeaderContentSection}>
                            Basket (<Link className={styles.backToHome}
                            to="/">{basketItems.length} items</Link>)
                        </div>
                    </div>
                </div>

                <div className={styles.basketMain}>
                    <div className={styles.basketMainTitle}>Check your order</div>

                    <div className={styles.basketMainGrid}>
                        
                        <ItemsSummary />

                    </div>
                </div>

            </div>
        </>
    )
}