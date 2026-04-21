import useFetch from "../../utils/useFetch";
import SingleOrder from "./SingleOrder";
import styles from "./orders.module.css";

export default function Orders(){    

    const { data: orders, setData: setOrders, loading, error } = useFetch('http://localhost:5000/orders');

    console.log('orders',orders);
    

    return(
        <div className={styles.orders}>
            <h2 className={styles.ordersHeading}>
                Orders
            </h2>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {orders && <SingleOrder orders={orders} setOrders={setOrders} />}
        </div>
    )
}