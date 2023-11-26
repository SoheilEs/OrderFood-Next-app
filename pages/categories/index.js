import CategoriesPage from "../../components/templates/CategoriesPage"
import filterData from "../../utils/utils.js"

function Categories({data}){
    return <CategoriesPage  data={data} />
}
export default Categories;


export async function getServerSideProps(context){
    const {query} = context
    const response = await fetch(`${process.env.BASE_URL}/data`)
    const data = await response.json()
    const filteredData = filterData(data,query)
    
    return{
        props:{data:filteredData}
    }
}