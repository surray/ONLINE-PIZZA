import {axiosInstance} from "../config";
export const getAllPizzas=()=>async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try{
        const response =await axiosInstance.get('/api/pizzas/getallpizzas')
        
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:JSON.parse(response.data)})
        console.log(payload);
    } catch(error){

        dispatch({type:'GET_PIZZAS_FAILED',payload:error})

    }

} 