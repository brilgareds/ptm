import { SyntheticEvent } from "react";
import { Product } from "../../../interfaces/product";
import Button from "../../atoms/Button/button.component";
import { SaveIcon } from "../../atoms/Icon/icon.component";
import formUpdateProductStyles from './formUpdateProduct.module.css'

interface FormUpdateProductProps {
  onSubmit?: (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => (Promise<void> | void)
  productToUpdate?: Product | null
}

export default function FormUpdateProduct(props: FormUpdateProductProps) {
  const { productToUpdate, onSubmit=()=>{} } = props

  return (
    <form onSubmit={onSubmit}>
      <div className={formUpdateProductStyles.formHead}>
        <h1 className={formUpdateProductStyles.formHead__title}>Actualiza la información de tu producto</h1>
      </div>

      <div className={formUpdateProductStyles.formBody}>

        <input type="text" name="id" id="id" defaultValue={productToUpdate?.id} style={{ display: 'none' }}/>

        <div className={formUpdateProductStyles.inputGroup}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" defaultValue={productToUpdate?.name} />
        </div>

        <div className={formUpdateProductStyles.inputGroup}>
          <label htmlFor="descripcion">Descripción</label>
          <input type="text" name="descripcion" id="descripcion" defaultValue={productToUpdate?.description} /> 
        </div>

        <div className={formUpdateProductStyles.inputGroup}>
          <label htmlFor="precio">Precio</label>
          <input type="text" name="precio" id="precio" defaultValue={productToUpdate?.price} /> 
        </div>

        <div className={formUpdateProductStyles.inputGroup}>
          <label htmlFor="cantidad_en_stock">Stock</label>
          <input type="text" name="cantidad_en_stock" id="cantidad_en_stock"  defaultValue={productToUpdate?.stock} /> 
        </div>
      </div>

      <div className={formUpdateProductStyles.formFooter}>
        <Button icon={<SaveIcon />} iconAlign="left" >Guardar</Button>
      </div>
    </form>
  )
}