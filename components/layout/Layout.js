import styles from "./Layout.module.css"
import Link from "next/link"
import { useState, useRef } from "react"
const Layout = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const divRef = useRef()
    const clickHandler=()=>{
        setIsOpen(!isOpen)
        if(!isOpen){
            divRef.current.style.transform = "translateX(0%)"
            
        }else{

            divRef.current.style.removeProperty("transform")
        }

    }
    return(
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">SummitFood</Link>
                </div>
                <button onClick={clickHandler} className={styles.humburger}>
                    <span className={isOpen ? styles.hm1 : null}></span>
                    <span className={isOpen ? styles.hm2 : null}></span>
                    <span className={isOpen ? styles.hm3 : null}></span>
                </button>
    
                        <div ref={divRef} className={styles.right}>
                            <Link className={styles.menu1} href="/menu">Menu</Link>
                            <Link className={styles.menu1} href="/categories">Categories</Link>

                        </div> 
            
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a href="/" target="_blank" rel="noreferrer">SuumitFood&copy;{new Date().getFullYear()}</a>
            </footer>
        </>
    )
}

export default Layout;