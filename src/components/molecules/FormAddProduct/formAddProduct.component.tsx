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
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" />
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="descripcion">Descripción</label>
          <input type="text" name="descripcion" id="descripcion" /> 
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="precio">Precio</label>
          <input type="text" name="precio" id="precio" /> 
        </div>

        <div className={formAddProductStyles.inputGroup}>
          <label htmlFor="cantidad_en_stock">Stock</label>
          <input type="text" name="cantidad_en_stock" id="cantidad_en_stock" /> 
        </div>
      </div>

      <div className={formAddProductStyles.formFooter}>
        <Button icon={<SaveIcon />} iconAlign="left" >Guardar</Button>
      </div>
    </form>
  )
}