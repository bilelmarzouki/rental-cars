import { message } from 'antd';
import axios from 'axios';
//import { type } from 'express/lib/response';


export const getAllcars=()=>async (dispatch)=>{
    dispatch({type:'LOADING' ,payload:true})
    try{
        const response = await axios.get('/cars')
        dispatch({type:'GET_ALL_CARS',payload:response.data})
        dispatch({type:'LOADING' , payload:false})
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING' , payload:false})

    }
}

export const addCar=(reqObj)=>async (dispatch)=>{
    dispatch({type:'LOADING' ,payload:true})
    try{
         await axios.post('/addcar',reqObj)
       
        dispatch({type:'LOADING' , payload:false})
        message.success('New car added successfully')
        setTimeout(()=>{
         window.location.href ='/admin'
        },500)
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING' , payload:false})

    }
}
export const editCar=(reqObj)=>async (dispatch)=>{
    dispatch({type:'LOADING' ,payload:true})
    try{
         await axios.post('/editcar',reqObj)
       
        dispatch({type:'LOADING' , payload:false})
        message.success('car details update successfully')
        setTimeout(()=>{
         window.location.href ='/admin'
        },500)
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING' , payload:false})

    }
}

export const deleteCar=(reqObj)=>async (dispatch)=>{
    dispatch({type:'LOADING' ,payload:true})
    try{
         await axios.post('/deletecar',reqObj)
       
        dispatch({type:'LOADING' , payload:false})
        message.success('car deleted  successfully')
        setTimeout(()=>{
         window.location.reload()
        },500)
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING' , payload:false})

    }
}