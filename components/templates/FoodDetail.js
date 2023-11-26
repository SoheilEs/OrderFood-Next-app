import styles from "./FoodDetail.module.css"
import Location from "../icons/Location"
import Dollar from "../icons/Dollar"
function FoodDetail({food}){
    const {id, name, price, discount,introduction, details,recipe,ingredients} = food
    return(
        <div className={styles.container}>
            <h2>Details</h2>
            <div className={styles.subContainer}>
                <div className={styles.banner}>
                    <img src={`/images/${id}.jpeg`} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span className={styles.location}><Location /> {details[0].Cuisine}</span>
                        <span className={styles.price}>
                            <Dollar />
                            {discount ? ( price * (100 - discount))/100
                            :price}$
                        </span>
                        {discount ? <span className={styles.discount}>{discount}% OFF</span>: null }
                    </div>
                </div>
                <div className={styles.intro}>
                    <p>{introduction}</p>
                </div>
                <div className={styles.detail}>
                    <h3>Details</h3>
                    <ul>
                        {
                            details.map((detail,index)=>(
                                <li key={index}>
                                    <p>{Object.keys(detail)}: </p>
                                    <span>{Object.values(detail)}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className={styles.detail}>
                    <h3>Ingredients</h3>
                    <ul>
                      {ingredients.map((item,index)=>
                      <li key={index}>
                        <p>{item}</p>
                      </li>
                      )}
                    </ul>
                </div>
                <div className={styles.recipe}>
                    <h3>Recipe</h3>
                    {recipe.map((recipe,index)=>(
                        <div key={index} className={index%2===0 ? styles.even : styles.odd}>
                            <span>{index + 1}</span>
                            <p>{recipe}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.btn}>Add to Cart</button>
            </div>
        </div>
    )
}
export default FoodDetail;