export interface Product {
  id: number
  name: string
  description: string
  price: number
  stock: number
  total: number
}

export type ProductResponse = {
  id: number,
  nombre: string,
  descripcion: string,
  precio: number,
  cantidad_en_stock: number,
  total: number,
}[]