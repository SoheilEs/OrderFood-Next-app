import FoodDetail from "../../components/templates/FoodDetail";

function Food({data}){
    return <FoodDetail  food={data}/>
}
export default Food;

export async function getStaticPaths(){
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const foodData = await res.json()
    const paths = foodData.slice(0,10).map(food => ({
        params:{
            foodId:food.id.toString()
        }
    }))
    return{
        paths,
        fallback:"blocking"
    }
}
export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`${process.env.BASE_URL}/data/${params.foodId}`)
    const data = await response.json()

    if(!data.name){
        return {
            notFound:true
        }
    }
    return {
        props:{data},
        revalidate: +process.env.REVALIDATE , //second
    }
}