import styles from "./orders.module.css"
import { toDecimal } from "../../utils/price";
import axios from "axios";

export default function SingleOrder({orders}){

    const deleteOrderFromList = async (id) =>{
        const updateOrderLits = orders.filter(item => item.id === id);
        const odrderId = updateOrderLits[0].id;
        
        await axios.delete(`http://localhost:5000/orders/${odrderId}`);
    }

    return(
        <div>
            {orders.map(order => (
                <div className={styles.singleOrder} key={order.id}>
                    <div className={styles.orderNumber}>Order Number: {order.id}</div>
                    <div>
                        <div className={styles.orderBorderline}></div>
                        <div className={styles.orderInfoHeading}>
                            Personal details:
                        </div>
                        <div>First Name: {order.form.data.firstName}</div>
                        <div>Last Name: {order.form.data.lastName}</div>
                        <div>Address: {order.form.data.address}</div>
                        <div>Country: {order.form.data.country}</div>
                        <div>E-mail: {order.form.data.email}</div>
                        <div>Telephone: {order.form.data.telephone}</div>
                        {order.form.data.additional !== '' && <div>Additional Information: {order.form.data.additional}</div>}
                    </div>
                    <div>
                        <div className={styles.orderBorderline}></div>
                        <div className={styles.orderInfoHeading}>
                            Item:
                        </div>
                        {order.items.map(item => 
                            <div className={styles.orderSingleItem} key={item.id}>
                                <div>Name: {item.name}</div>
                                <div>Price: {toDecimal(item.price)}</div>
                                <div>Quantity: {item.quantity}</div>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className={styles.orderBorderline}></div>
                        <div className={styles.orderInfoHeading}>
                            Price Summary:
                        </div>
                        <div>Delivery Price: {toDecimal(order.prices[0].deliveryPrice)}</div>
                        <div>Items Price: {toDecimal(order.prices[0].itemPrice)}</div>
                        <div>Tax: {toDecimal(order.prices[0].itemTax)}</div>
                        <div>Total Price: {toDecimal(order.prices[0].totalPrice)}</div>
                    </div>
                    <div className={styles.orderBorderline}></div>
                    <button onClick={() => deleteOrderFromList(order.id)} className={styles.orderDeleteButton}>Remove Order</button>
                </div>
            ))}
        </div>
    )
}