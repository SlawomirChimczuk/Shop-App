import styles from "./search.module.css"

export default function Search(){

    return(
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>
    )
}