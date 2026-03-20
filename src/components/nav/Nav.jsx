import { Link } from "react-router"
import styles from "./nav.module.css"
import { useContext } from "react"
import { basketItemsContext } from "../../context/BasketItemsProvider";

export default function Nav(){

    const { basketItems } = useContext(basketItemsContext);

    let basketQty = 0;

    basketItems.forEach(item => {
        basketQty += item.quantity
    })


    return(
        <div className={styles.nav}>
            <div className={styles.navLeft}>
            <Link to="/" className={styles.navLink}>
                Home
            </Link>
            </div>

            <div className={styles.navRight}>
                <Link className={styles.navLink} to="/orders">

                    <span className={styles}>Orders</span>
                </Link>

                <Link className={styles.navLink} to="/basket">
                    <div className={styles.cartQuantity}>{basketQty}</div>
                    <div className={styles.navCart}>Basket</div>
                </Link>
            </div>
        </div>
    )
}