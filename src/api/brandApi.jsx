import api from "./axios";

export const getBrands=()=>api.get('/brand')