import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Card from "../modules/Card"
function CategoriesPage({data}) {
    
    const router = useRouter()
    const [query, setQuery] = useState({
        difficulty:"",
        time:""
    })
    const changeHandler = e => {
        
        setQuery({
            ...query,
            [e.target.name] : e.target.value
        })
    }
    const clickHandler = () =>{
        router.push({
            pathname:"/categories",
            query
        })
    }
    useEffect(()=>{
        const { difficulty, time} = router.query
        if(query.difficulty != difficulty || query.time != time){
            setQuery({difficulty, time})
        } 
    },[])
    
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select name="difficulty" value={query.difficulty} onChange={changeHandler}>
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select name="time" value={query.time} onChange={changeHandler} >
            <option value="">Cooking Time</option>
            <option value="less">Less than 30 min</option>
            <option value="more">More than 30 min</option>
          </select>
          <button onClick={clickHandler}>Search</button>
        </div>
        <div className={styles.cards}>
            {!data.length ? <img src="/images/search.png" alt="categorey" />:null}
            {data.map(food => (
                <Card key={food.id} menu={food} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default CategoriesPage;
