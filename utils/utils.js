function filterData(data,query){
const { difficulty, time } = query
const filteredData = data.filter(item =>{
    const difficultyResult = item.details.filter( detail => detail.Difficulty && detail.Difficulty === difficulty)
    const timeResult = item.details.filter( detail => {
        const cookingTime = detail["Cooking Time"] || ""
        const [timeDetail] = cookingTime.split(" ")
        if(time ==="less" && timeDetail && +timeDetail <= 30){
            return detail
        }else if (time === "more" && timeDetail && +timeDetail > 30){
            return detail
        }

    })
    if(time && difficulty && timeResult.length && difficultyResult.length){
        return item
    } else if (!time && difficulty && difficultyResult.length){
        return item
    }else if(time && timeResult.length && !difficulty ) {
        return item
    }
})
return filteredData
}

export default filterData;