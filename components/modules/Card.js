import styles from "./Card.module.css"
import Dollar from "../icons/Dollar"
import Location from "../icons/Location"
import Link from "next/link"
function Card ({menu}){
    const {id, name, price,discount,details:[Cuisine,]} = menu
    const { Cuisine:loc } = Cuisine
    
    return(
        <div className={styles.container}>
            <img src={`/images/${id}.jpeg`}  alt={`${name}`} />
            <div className={styles.title}>
                <p>{name}</p>
                <div>
                    <Location/><span>{loc}</span>
                </div>
            </div>
            <div className={styles.price}>
                <Dollar />
                {
                  discount ?(
                    <span className={styles.discounted}>{(price * (100 - discount))/100} $</span>
                  ) :  <span>{price} $</span>

                }
                {discount ? <div className={styles.badge}>{discount}%</div>:null}
            </div>
            
            <Link className={styles.link} href={`/menu/${id}`}>See Details</Link>
            
        </div>
    );
}
export default Card;