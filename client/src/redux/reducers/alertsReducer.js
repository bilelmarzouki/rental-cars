const initiaData ={
    loading : false
};


export const alertsReducer=(state=initiaData,action)=>{
 
    switch(action.type)
    {
        case 'LOADING' : {
           return{
               ...state,
               loading: action.payload
           }
        }
        default : return state 
    }
}