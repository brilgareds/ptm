import { SyntheticEvent } from "react";
import Button from "../../atoms/Button/button.component";
import formDeleteProductStyles from './formDeleteProduct.module.css'
import { Product } from "../../../interfaces/product";

interface FormDeleteProductProps {
  onSubmit?: (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => (Promise<void> | void)
  productToUpdate?: Product | null
  closeDeleteModal: () => void
}

export default function FormDeleteProduct(props: FormDeleteProductProps) {
  const { productToUpdate, onSubmit, closeDeleteModal } = props

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={formDeleteProductStyles.modalHeader}>
          <h1 className={formDeleteProductStyles.modalHeader__title}>¿Esta seguro que desea borrar el producto "{productToUpdate?.name}" ?</h1>
        </div>

        <div>
          <input type="text" name="id" defaultValue={productToUpdate?.id} style={{ display: 'none' }} />
        </div>

        <div className={formDeleteProductStyles.modalFooter}>
          <Button className={formDeleteProductStyles.cancelButton} onClick={closeDeleteModal}>Cancelar</Button>
          <Button className={formDeleteProductStyles.deleteButton}>Borrar</Button>
        </div>
      </form>
    </>
  )
}