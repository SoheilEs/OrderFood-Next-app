import styles from "./HomePage.module.css";
import Banner from "../modules/Banner"
import Attributes from "../modules/Attributes"
import Defination from "../modules/Defination"
import Companies from "../modules/Companies"
import Instraction from "../modules/Instraction"
import Guide from "../modules/Guide"
import Restriction from "../modules/Restriction"

function HomePage(){
    return(
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Defination />
            <Companies />
            <Instraction />
            <Guide />
            <Restriction />
        </div>
    );
}

export default HomePage;