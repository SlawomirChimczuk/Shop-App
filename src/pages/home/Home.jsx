import { useEffect, useState } from "react"
import ItemsLayout from "./ItemsLayout";
import styles from "./home.module.css"

export default function Home(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('http://localhost:5000/items');
                const data = await res.json();
                setItems(data);
            } catch (error){
                console.log('Error fetching data', error);
            } finally {
                setLoading(true);
            }
        }

        getItems(); 
    },[]);

    return(
        <div className={styles.home}>
            {loading ?  <ItemsLayout items={items} /> : 'Loading'}   
        </div>
    )
}