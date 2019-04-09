const getUserList = () => {
    alert(1);
    return (function(dispatch,getState) {
        //let response = await fetch(url);
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        return dispatch({type: 'add', payLoad: {}});
    }());
    /*
    console.log(dispatch)
    let response = null;
    (async (dispatch,getState) => {
        console.log(dispatch)
        try{
            response = await fetch('/api/test.json');
        }catch(e){
            console.log(e);
        }
        return dispatch({type: 'add', payLoad: response});
    })();
    console.log(dispatch)
    return dispatch({
        type: 'add', 
        payLoad: response
    });*/
    //alert('action');
    // return async(dispatch,getState) => {
    //     let response = await fetch(url);
    //     //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
    //     dispatch({type: 'GET_USER_LIST', payLoad: response.json});
    // }
}

export default {
    getUserList
}