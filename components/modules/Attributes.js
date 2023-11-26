import styles from "./Attributes.module.css"
import Fast from "../icons/Fast"
import Food from "../icons/Food"
import Choice from "../icons/Choice"
import Clock from "../icons/Clock"
function Attributes(){
    return(
        <div className={styles.container}>
            <h3>Why Us ?</h3>
            <div className={styles.subContainer}>
                <div>
                    <Fast />
                    <p>Fast</p>
                </div>
                <div>
                    <Food />
                    <p>Fast</p>
                </div>
                <div>
                    <Choice />
                    <p>Fast</p>
                </div>
                <div>
                    <Clock />
                    <p>Fast</p>
                </div>
            </div>
        </div>
    );
}

export default Attributes;