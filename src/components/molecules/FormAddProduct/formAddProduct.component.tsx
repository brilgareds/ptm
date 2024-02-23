import { SyntheticEvent } from "react";
import Button from "../../atoms/Button/button.component";
import { SaveIcon } from "../../atoms/Icon/icon.component";
import formAddProductStyles from './formAddProductStyles.module.css'

interface FormAddProductProps {
  onSubmit?: (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => (Promise<void> | void)
}

export default function FormAddProduct(props: FormAddProductProps) {
  const { onSubmit=()=>{} } = props

  return (
    <form onSubmit={onSubmit}>
      <div className={formAddProductStyles.formHead}>
        <h1 className={formAddProductStyles.formHead__title}>Agrega los datos de tu producto</h1>
      </div>

      <div className={formAddProductStyles.formBody}>
        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="description">Descripción</label>
          <input type="text" name="description" id="description" /> 
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="price">Precio</label>
          <input type="text" name="price" id="price" /> 
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="stock">Stock</label>
          <input type="text" name="stock" id="stock" /> 
        </div>
      </div>

      <div className={formAddProductStyles.formFooter}>
        <Button icon={<SaveIcon />} iconAlign="left" >Guardar</Button>
      </div>
    </form>
  )
}