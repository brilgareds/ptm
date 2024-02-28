import { Product } from "../../interfaces/product";
import { api, generalConfig } from "../config";

const productServiceUrl = `${process.env.REACT_APP_BACKEND_URL}/product`

export const productService = {
  getProducts: async () => {
    const url = `${productServiceUrl}/getAll`
    return api(url, {...generalConfig })
  },

  createProduct: async (data: Product) => {
    const url = `${productServiceUrl}/create`
  
    return api(url, { method: 'post', body: JSON.stringify(data), ...generalConfig})
  },
  
  updateProduct: async (data: Product) => {
    const url = `${productServiceUrl}/update`
  
    return api(url, { method: 'put', body: JSON.stringify(data), ...generalConfig})
  },
  
  deleteProduct: async (id: number) => {
    const url = `${productServiceUrl}/delete/${id}`
  
    return api(url, { method: 'delete', ...generalConfig})
  }
}
