let initialState  = {
    name: 'xiaobing',
    address: '郑州市'
}
const Index = (state = initialState , action) => {
    switch(action.type){
        case "ADD":
            alert('add')
            return state
        default: 
            return state
    }
}

export default Index