/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
const basketItemsContext = createContext();

function BasketItemsProvider({children}){


    const [basketItems, setBasketItems] = useState([]);

    const loadBasket = async () => {
        try{
            const res = await fetch('http://localhost:5000/basket-items');
            const data = await res.json();
            setBasketItems(data);
        } catch(error){
             console.log('Error fetching data for basket items: ', error);
        }
    }
    useEffect(() => {
        loadBasket();
    },[]);

    return(
        <basketItemsContext.Provider value={{ basketItems, loadBasket }}>
            {children}
        </basketItemsContext.Provider>
    );
}

export { BasketItemsProvider, basketItemsContext };