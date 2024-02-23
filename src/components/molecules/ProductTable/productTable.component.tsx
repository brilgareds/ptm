import { GridRenderCellParams } from "@mui/x-data-grid";
import { Product } from "../../../interfaces/product";
import Loading from "../../atoms/Loading/loading.component";
import Table from "../../atoms/Table";
import { TabletComponentProps } from "../../atoms/Table/table.component";
import productTableStyles from './productTable.module.css'
import { AddIcon, DeleteIcon, EditIcon } from "../../atoms/Icon/icon.component";
import Button from "../../atoms/Button/button.component";
import { useProductTable } from "./productTable.hook";
import Modal from "../../atoms/Modal";
import FormUpdateProduct from "../FormUpdateProduct/formUpdateProduct.component";
import FormDeleteProduct from "../FormDeleteProduct/formDeleteProduct.component";
import FormAddProduct from "../FormAddProduct/formAddProduct.component";

interface ProductTableComponentProps {
  rows?: Product[]
}

export default function ProductTableComponent(props: ProductTableComponentProps) {
  const {
    showCreateModal,
    showUpdateModal,
    showDeleteModal,
    closeCreateModal,
    closeUpdateModal,
    closeDeleteModal,
    openCreateModal,
    openUpdateModal,
    openDeleteModal,
    createProduct,
    updateProduct,
    deleteProduct,
    productToUpdate,
  } = useProductTable()

  const TabletOptions = (params: GridRenderCellParams) => (
    <div className={productTableStyles.tabletOptionsContainer}>
      <Button onClick={() => { openUpdateModal(params) }} color='--transparent' icon={<EditIcon style={{ color: 'var(--primary-100)' }} />} />
      <Button onClick={() => { openDeleteModal(params) }} color='--transparent' icon={<DeleteIcon style={{ color: 'var(--alert-error)' }} />} />
    </div>
  )

  const columns: TabletComponentProps['columns'] = [
    { field: ' ', headerName: ' ', headerAlign: 'center', disableColumnMenu: false, sortable: false, hideable: false, filterable: false, width: 1 },
    { field: 'name', headerName: 'Nombre', disableColumnMenu: true, width: 200 },
    { field: 'description', headerName: 'Descripción', disableColumnMenu: true, width: 300 },
    { field: 'price', headerName: 'Precio', disableColumnMenu: true, width: 120 },
    { field: 'stock', headerName: 'Stock', disableColumnMenu: true, width: 100 },
    { field: 'total', headerName: 'Total', disableColumnMenu: true, width: 100 },
    { field: '', headerName: '', disableColumnMenu: true, width: 100, sortable: false, hideable: false, filterable: false, editable: false, renderCell: TabletOptions },
  ]

  if (props.rows === undefined) return <Loading variant="absolute" />

  return (
    <>
      <div className={productTableStyles.addProductButtonContainer}>
        <Button onClick={openCreateModal} icon={<AddIcon />}>Crear producto</Button>
      </div>

      <Table columns={columns} rows={props.rows} />

      {showCreateModal && (
        <Modal closeModal={closeCreateModal}>
          <FormAddProduct onSubmit={createProduct} />
        </Modal>
      )}

      {showUpdateModal && (
        <Modal closeModal={closeUpdateModal}>
          <FormUpdateProduct onSubmit={updateProduct} productToUpdate={productToUpdate} />
        </Modal>
      )}

      {showDeleteModal && (
        <Modal closeModal={closeDeleteModal} size="small">
          <FormDeleteProduct onSubmit={deleteProduct} productToUpdate={productToUpdate} closeDeleteModal={closeDeleteModal} />
        </Modal>
      )}
    </>
  )
}
