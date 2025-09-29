import api from "../../../api/axios";

export const addVariant=(formData)=>
    api.post('/variant',formData,{
        headers: { "Content-Type": "multipart/form-data" }
    })


export const deleteVariant=(id)=>api.delete(`variant/${id}`)