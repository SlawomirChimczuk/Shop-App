import styles from "./search.module.css"

export default function Search({ setItem }){    

    return(
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Search"
                onChange={(e) => setItem(e.target.value)}
            />
        </div>
    )
}