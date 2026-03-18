import Item from "./Item";
import styles from "./itemslayout.module.css"


export default function ItemsLayout({items}){    
   
    return(
        <div className={styles.itemsLayoutContainer}>
            {items.map((item) => {
                return(
                    <Item key={item.id} item={item} />
                )
            })}
        </div>
    )
}