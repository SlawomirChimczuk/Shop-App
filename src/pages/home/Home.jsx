import { useEffect, useState } from "react"
import ItemsLayout from "./ItemsLayout";
import styles from "./home.module.css"
import Search from "../../components/search/Search";

export default function Home(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState('');

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('http://localhost:5000/items');
                const data = await res.json();
                setData(data);
            } catch (error){
                console.log('Error fetching data for items: ', error);
            } finally {
                setLoading(true);
            }
        }

        getItems(); 
    },[]);

    const items = data.filter(el => el.name.toLowerCase().includes(item.toLowerCase()));

    return(
        <>
            <Search setItem={setItem}/>
            <div className={styles.home}>
                {loading ?  <ItemsLayout items={items} /> : 'Loading'}   
            </div>
        </>
    )
}