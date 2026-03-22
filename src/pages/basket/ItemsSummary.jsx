import styles from './basket.module.css'
import axios from "axios";
import { useContext } from "react";
import { basketItemsContext } from "../../context/BasketItemsProvider";

export default function ItemsSummary(){

    const { basketItems, loadBasket } = useContext(basketItemsContext);

    return(
        <>
            <div>

                {basketItems.map((basketItem)=> {

                    const updateItemQuantity = async () => {
                        console.log("update");
                    }

                    const deleteItemFromBasket = async () =>{
                        await axios.delete(`http://localhost:5000/basket-items/${basketItem.id}`);
                        await loadBasket();
                    };

                    return(
                        <div key={basketItem.id} className={styles.basketItemWrapper}>
                            <div className={styles.basketItemDate}>
                                Delivery date: {basketItem.timeCreated}
                            </div>

                            <div className={styles.basketItemDataLayout}>
                                <div className={styles.basketImgWrapper}>
                                    <img className={styles.basketImg}
                                    src={basketItem.image} />
                                </div>

                                <div className={styles.basketItemInfo}>
                                    <div className={styles.basketItemInfoSize}>
                                        Print name: {basketItem.name}
                                    </div>
                                    <div className={styles.basketItemInfoSize}>
                                        Price: {basketItem.quantity * basketItem.price}
                                    </div>
                                    <div className={styles.basketItemInfoSize}>
                                        Quantity: {basketItem.quantity}
                                    </div>

                                </div>

                                <div className={styles.basketActionButtonWrapper}>
                                    <button className={styles.basketActionButton}
                                        onClick={updateItemQuantity}
                                    >
                                        Update
                                    </button>
                                    <button className={styles.basketActionButton}
                                        onClick={deleteItemFromBasket}
                                    >
                                    Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}