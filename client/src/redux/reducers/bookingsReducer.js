const initiaData ={
    bookings :[],
    };
    export const bookingsReducer =(state=initiaData,action)=>{
        switch(action.type)
        {
            case 'GET_ALL_BOOKINGS' : {
                return{
                    ...state,
                    bookings :action.payload
                }
            }
            default:return state
        }
    }