import styles from "./item.module.css"
import style from "../../additional.module.css"
import { useState } from "react"
import axios from "axios";



export default function Item({item}){    

    const [qty, setQty] = useState(1);
    

    const addToBasket = async () => {
        
        const time = Date.now();
        
        await axios.post('http://localhost:5000/basket-items', {
            timeCreated: time,
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.price,
            tags: item.tags,
            quantity: qty
        });
    }


    return(
        <div className={styles.itemWrapper}>
            <div className={styles.itemImageWrapper}>
            <img className={styles.itemImage}
                src={item.image} />
            </div>

            <div className={styles.itemName}>
                {item.name}
            </div>
            

            <div className={styles.itemPrice}>
                {item.price}
            </div>

            <div className={styles.itemQuantity}>
            <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div className={styles.space}></div>

            <button className={`${styles.addItemToBasket} ${style.mainButton}`}
                onClick={addToBasket}
            >
                Add to Basket
            </button>
        </div>
    )
}