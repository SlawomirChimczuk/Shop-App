import { useCallback, useEffect, useState } from "react";
import { BasketItemsContext } from "./BasketItemsContext";

function BasketItemsProvider({children}){

    const [basketItems, setBasketItems] = useState([]);

    
    const loadBasket = useCallback(async () => {
        try{
            const res = await fetch('http://localhost:5000/basket-items');
            const data = await res.json();
            setBasketItems(data);
        } catch(error){
             console.log('Error fetching data for basket items: ', error);
        }
    },[]);

    useEffect(() => {
        // loadBasket();
        let isMounted = true;
        const fetchData = async () => await loadBasket();
        isMounted && fetchData();
        return () => isMounted = false;

    },[loadBasket]);

    return(
        <BasketItemsContext.Provider value={{ basketItems, loadBasket }}>
            {children}
        </BasketItemsContext.Provider>
    );
}

export { BasketItemsProvider };