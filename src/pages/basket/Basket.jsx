import styles from './basket.module.css'
import style from "../../additional.module.css";
import { Link } from 'react-router'
import { BasketItemsContext } from '../../context/BasketItemsContext'
import { useContext } from 'react';
import { useNavigate } from "react-router";
import ItemsSummary from './ItemsSummary';
import BasketPriceSummary from './BasketPriceSummary';

export default function Basket(){
    
    const { basketItems } = useContext(BasketItemsContext);
    
    const navigate = useNavigate();

    const getSummaryInformations = () => {
        navigate('/form');
    }
    

    return(
        basketItems.length != 0 &&
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
                    <div className={styles.basketMainTitle}>Check your basket</div>

                    <div className={styles.basketMainGrid}>
                        <ItemsSummary styles={styles}/>
                        <BasketPriceSummary styles={styles}/>
                        <button className={`${styles.basketOrder} ${style.mainButton}`}
                            onClick={getSummaryInformations}
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}