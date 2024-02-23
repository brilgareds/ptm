import { api } from "../config";

const productServiceUrl = `${process.env.REACT_APP_BACKEND_URL}/product`

const mockProducts = {
  products: [
    {
      id: 1,
      name: "First product name",
      description: "First product description",
      price: 7,
      stock: 50,
      total: 7400
    },
    {
      id: 2,
      name: "Second product name",
      description: "Second product description",
      price: 100,
      stock: 74,
      total: 500
    },
    {
      id: 3,
      name: "Third product name",
      description: "Third product description",
      price: 10,
      stock: 50,
      total: 500
    }
  ]
}

export const productService = {
  getProducts: async () => {
    // const url = `${productServiceUrl}/getAll`
    // return api.get(url)

    return { data: mockProducts }
  },

  createProduct: async (data: FormData) => {
    const url = `${productServiceUrl}/create`
  
    return api.post(url, data)
  },
  
  updateProduct: async (data: FormData) => {
    const url = `${productServiceUrl}/update`
  
    return api.put(url, data)
  },
  
  deleteProduct: async (id: number) => {
    const url = `${productServiceUrl}/delete/${id}`
  
    return api.delete(url)
  }
}
