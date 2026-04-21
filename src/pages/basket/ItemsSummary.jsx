// import styles from './basket.module.css'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BasketItemsContext } from "../../context/BasketItemsContext";
import { formatMillisecondsToDate } from '../../utils/date';
import { toDecimal } from "../../utils/price";

export default function ItemsSummary({styles}){

    const { basketItems, loadBasket } = useContext(BasketItemsContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
      setItems(basketItems);
    }, [basketItems]);

    toDecimal

    function handleQuantityChange(id, itemQuantity){
       const updateBasket = items?.map((item) => {
        if(item.id === id){
            return { ...item, quantity: Number(itemQuantity)}
        };
        return item;
       });
       setItems(updateBasket);
     
    }    

    return(
        <>
            <div>

                {items?.map((basketItem)=> {
                    
                    const updateItemQuantity = async () => {
                        const itemQyt = items.filter(item => item.id === basketItem.id);
                        const time = Date.now();
                        await axios.patch(`http://localhost:5000/basket-items/${basketItem.id}`, {  
                            timeCreated: time,                        
                            quantity: itemQyt[0].quantity
                        });
                        await loadBasket();
                    }

                    const deleteItemFromBasket = async () =>{
                        await axios.delete(`http://localhost:5000/basket-items/${basketItem.id}`);
                        await loadBasket();
                    };

                    return(
                        <div key={basketItem.id} className={styles.basketItemWrapper}>
                            <div className={styles.basketItemDate}>
                                 Print name: {basketItem.name}
                            </div>

                            <div className={styles.basketItemDataLayout}>
                                <div className={styles.basketImgWrapper}>
                                    <img className={styles.basketImg}
                                    src={basketItem.image} />
                                </div>

                                <div className={styles.basketItemInfo}>
                                    <div className={styles.basketItemInfoSize}>
                                        Item added at: {formatMillisecondsToDate(basketItem.timeCreated)}
                                    </div>
                                    <div className={styles.basketItemInfoSize}>
                                        Price: {toDecimal(basketItem.quantity * basketItem.price)}
                                    </div>
                                    <div className={styles.basketItemInfoSize}>
                                        Quantity: 
                                        {location.pathname === '/basket' ?
                                        <input className={styles.basketItemInput} type='number' min='1'
                                            value={basketItem.quantity}
                                            onChange={(e) => handleQuantityChange(basketItem.id, e.target.value)}
                                        />
                                        : " " + basketItem.quantity}
                                    </div>
                                    

                                </div>

                                {location.pathname === '/basket' && 
                                
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
                                
                                }


                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}