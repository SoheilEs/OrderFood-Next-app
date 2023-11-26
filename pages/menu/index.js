import styles from "../../styles/Menu.module.css";
import Card from "../../components/modules/Card";
function Menu({data}){
    return(
        <div className={styles.menu}>
            <h3 className={styles.header}>Menu</h3>
            <div className={styles.container}>
                {data.map(item=><Card key={item.id} menu={item} />)}
             </div>
        </div>
    );
}
export default Menu;


export async function getStaticProps(){

    const response = await fetch(`${process.env.BASE_URL}/data`)
    const data = await response.json()
    return{
        props:{data}, 
        revalidate : +process.env.REVALIDATE  , //second
    }
}