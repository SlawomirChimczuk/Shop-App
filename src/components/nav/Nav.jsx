import { Link } from "react-router"
import styles from "./nav.module.css"

export default function Nav(){
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

                <Link className={styles.navLink} to="/checkout">
                    <div className={styles.cartQuantity}>2</div>
                    <div className={styles.navCart}>Cart</div>
                </Link>
            </div>
        </div>
    )
}