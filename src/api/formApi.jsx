import api from "./axios";


export const getPanelFormBrands=()=>api.get('brand/panel')

export const getpanelSubCategory=()=>api.get('category/panel')