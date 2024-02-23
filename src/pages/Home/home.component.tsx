/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { productService } from '../../services/products/products.service';
import { Product } from '../../interfaces/product';
import { useNotification } from '../../hooks/notifications';
import ProductTable from '../../components/molecules/ProductTable';
import homeStyles from './home.module.css'
import HighlightedInfo from '../../components/molecules/HighlightedInfo';
import { uselessfactsService } from '../../services/uselessfacts/uselessfacts.service';

export default function Home() {
  const { onError } = useNotification()
  const [products, setProducts] = useState<Product[]>()
  const [uselessfacts, setUselessfacts] = useState<string>('')

  useEffect(() => {
    const getProducts = async () => {  
      try {
        const { data } = await productService.getProducts()
        setProducts(data.products)
      } catch (error) {
        setProducts([])
        console.error('getProducts() ->', error)
        onError('Error al intentar obtener los productos!')
      }
    }

    const getFacts = async () => {
      try {
        const { data } = await uselessfactsService.getFacts()
        setUselessfacts(data.text)  
      } catch (error) {
        setProducts([])
        console.error('getFacts() ->', error)
        onError('Error al intentar obtener los Facts!')
      }
    }

    void getProducts()
    void getFacts()
  }, [])

  return (
    <>
      <section className={homeStyles.highlightedInfoSection}>
        <div className={homeStyles.highlightedInfoContainer}>
          <h1 className={homeStyles.productTablet__title}>Información resaltante</h1>

          <HighlightedInfo products={products} />
        </div>
      </section>

      <section className={homeStyles.productSection}>
        <div className={homeStyles.productTabletContainer}>
          <h1 className={homeStyles.productTablet__title}>Nuestros productos</h1>

          <ProductTable rows={products} />
        </div>
      </section>

      <footer className={homeStyles.footer}>
        <h2 className={homeStyles.footer__title}>A continuación un uselessfacts:</h2>

        <h4 className={homeStyles.footer__content}>{uselessfacts}</h4>
      </footer>
    </>
  );
}
