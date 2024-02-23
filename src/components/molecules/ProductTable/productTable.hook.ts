import { GridRenderCellParams } from "@mui/x-data-grid"
import { SyntheticEvent, useState } from "react"
import { Product } from "../../../interfaces/product"
import { productService } from "../../../services/products/products.service"
import { useNotification } from "../../../hooks/notifications"

export const useProductTable = () => {
  const { onSuccess, onError } = useNotification()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [productToUpdate, setProductToUpdate] = useState<Product | null>(null)

  const openCreateModal = () => {
    setShowCreateModal(true)
  }

  const openUpdateModal = (params: GridRenderCellParams) => {
    setShowUpdateModal(true)
    setProductToUpdate(params.row)
  }

  const openDeleteModal = (params: GridRenderCellParams) => {
    setShowDeleteModal(true)
    setProductToUpdate(params.row)
  }

  const closeCreateModal = () => {
    setShowCreateModal(false)
  }

  const closeUpdateModal = () => {
    setShowUpdateModal(false)
    setProductToUpdate(null)
  }

  const closeDeleteModal = () => {
    setProductToUpdate(null)
    setShowDeleteModal(false)
  }

  const createProduct = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    console.log('data: ', data)

    try {
      await productService.createProduct(data)
      onSuccess('Producto creado correctamente!')
    } catch (error) {
      console.error('updateProduct() ->', error)
      onError('Ocurrió un error al intentar crear el producto')
    }
  }

  const updateProduct = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault()
    const data = new FormData(event.target as HTMLFormElement)

    try {
      await productService.updateProduct(data)
      onSuccess('Producto actualizado correctamente!')
    } catch (error) {
      console.error('updateProduct() ->', error)
      onError('Ocurrió un error al intentar actualizar el producto')
    }
  }

  const deleteProduct = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    const id = data.get('id') as unknown as number

    try {
      await productService.deleteProduct(id)
      onSuccess('Producto eliminado correctamente!')
    } catch (error) {
      console.error('deleteProduct() ->', error)
      onError('Ocurrió un error al intentar eliminar el producto')
    }
  }

  return {
    showCreateModal,
    showUpdateModal,
    showDeleteModal,
    openCreateModal,
    openUpdateModal,
    openDeleteModal,
    closeCreateModal,
    closeUpdateModal,
    closeDeleteModal,
    createProduct,
    updateProduct,
    deleteProduct,
    productToUpdate,
  }
}