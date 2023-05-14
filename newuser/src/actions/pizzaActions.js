import {axiosInstance} from "../config";
export const getAllPizzas=()=>async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try{
        const response =await axiosInstance.get('/pizzas/getallpizzas')
        ///api
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:response.data})
    } catch(error){

        dispatch({type:'GET_PIZZAS_FAILED',payload:error})

    }

} 