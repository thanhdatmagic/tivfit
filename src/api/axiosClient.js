
import axios from 'axios'
const axiosClient= axios.create({
    baseURL:'https://62de98c89c47ff309e778075.mockapi.io',header:{
        'content-type': 'application/json'
    }
    
})

axiosClient.interceptors.response.use((response)=>{
    if (response && response.data){
        return response.data;
    }
    return response;
},(error)=>{
    throw error;
})

export default axiosClient;