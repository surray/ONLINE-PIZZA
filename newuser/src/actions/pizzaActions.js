import {axiosInstance} from "../config";
export const getAllPizzas=()=>async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try{
        const response =await axiosInstance.get('/api/pizzas/getallpizzas')
        const data1=JSON.parse(response.data);
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:data1})
    } catch(error){

        dispatch({type:'GET_PIZZAS_FAILED',payload:error})

    }

} 