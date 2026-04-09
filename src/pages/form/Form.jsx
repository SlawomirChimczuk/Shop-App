import { useContext } from "react";
import { basketItemsContext } from '../../context/BasketItemsProvider'


export default function Form(){
    const { basketItems } = useContext(basketItemsContext);
    
    console.log("basketItems-orders", basketItems);

    return(
        <>
            Form
        </>
    )
}