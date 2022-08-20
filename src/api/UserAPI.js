import axiosClient from "./axiosClient";

const userAPI={
    getAll: () =>{
        const url ='/user'
        return axiosClient.get(url)
    },

    getProfile:(id)=>{
        const url = `/user/${id}`
        return axiosClient.get(url,{id})
    }
}

export default userAPI;