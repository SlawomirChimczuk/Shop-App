import { useContext, useState } from "react";
import { BasketItemsContext } from '../../context/BasketItemsContext'
import FormInputs from "./FormInputs";
import axios from "axios";
import BasketPriceSummary from "../basket/BasketPriceSummary";
import style from './form.module.css'
import styles from '../basket/./basket.module.css'
import ItemsSummary from "../basket/ItemsSummary";
import { useNavigate } from "react-router";

export default function Form(){
    const { basketItems, loadBasket } = useContext(BasketItemsContext);
    const [prices, setPrices] = useState([]);

    const summaryPrice = (price) => {
        setPrices(price)
    }

    const navigate = useNavigate();

    const placeAnOrder = async (formData) =>{
        try{
            await axios.post('http://localhost:5000/orders', {
                form: formData,
                items: basketItems,
                prices: prices
            });

            const deleteBasketItems = basketItems.map(item => 
                axios.delete(`http://localhost:5000/basket-items/${item.id}`)
            );

            await Promise.all(deleteBasketItems);

            await loadBasket();

        } catch(error){
            console.error("Placing order error : ", error)
        }

        await navigate('/orders');
    }

    return(
        basketItems.length != 0 &&
        <>
            <div className={style.form}>
                <h2 className={style.formHeading}>
                    Form
                </h2>
                <FormInputs style={style} getFormData={placeAnOrder}/>
                <ItemsSummary styles={styles}/>
                <BasketPriceSummary getPriceSummary={summaryPrice} styles={styles} />
            </div>
        </>
    )
}