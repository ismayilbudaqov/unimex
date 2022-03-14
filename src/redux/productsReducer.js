let allData =[]



const productsReducer =(state = allData,action) =>{
switch(action.type){
case "ALL_DATA":
    return state = action.payload

    default :
    return state
}
}


export default productsReducer