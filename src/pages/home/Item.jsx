import styles from "./item.module.css"
import style from "../../additional.module.css"

export default function Item({item}){    

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
            <select>
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

            <button className={`${styles.addItemToBasket} ${style.mainButton}`}>
                Add to Basket
            </button>
        </div>
    )
}