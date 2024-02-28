/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Product } from "../../../interfaces/product"
import Loading from "../../atoms/Loading/loading.component"
import highlightedInfoStyles from './highlightedInfo.module.css'
import { catService } from "../../../services/cats/cats.service"
import { useNotification } from "../../../hooks/notifications"
import Modal from "../../atoms/Modal"

interface HighlightedInfoProps {
  products?: Product[]
}

export default function HighlightedInfo(props: HighlightedInfoProps = {}) {
  const { products } = props
  const [catFacts, setCatFacts] = useState<string[]>()
  const [showCatFacts, setShowCatFacts] = useState(true)
  const { onError } = useNotification()
  
  // if (!props.rows.length) return <h3>No se encontró ningun producto</h3>
  let total = 0
  let expensiveProduct = { name: '', price: 0,  }

  products?.forEach((producto) => {
    if (producto.price > expensiveProduct.price ) expensiveProduct = {...producto}

    total += producto.price
  })

  useEffect(() => {
    const getCatFactLikeString = async () => {
      const response = await catService.getFacts()
      const data = await response.json()

      return data.data[0]
    }

    const getCatFacts = async () => {
      try {
        const [firstFact, secondFact] = await Promise.all([
          getCatFactLikeString(),
          getCatFactLikeString()
        ])

        setCatFacts([firstFact, secondFact])
      } catch (error) {
        setCatFacts([])
        console.error('getCatFacts() ->', error)
        onError('Error al intentar obtener los datos de los gatos!')
      }
    }

    void getCatFacts()
  }, [])

  if (products === undefined) return <Loading variant="absolute" />

  return (
    <div className={highlightedInfoStyles.infoCardsContainer}>
      <div className={highlightedInfoStyles.infoCard}>
        <h4 className={highlightedInfoStyles.infoCard__title}>Valor total<br/>Inventario</h4>

        <div className={highlightedInfoStyles.infoCard__body}>
          <span className={highlightedInfoStyles.infoCard__quantity}>{total}</span>
        </div>
      </div>

      <div className={highlightedInfoStyles.infoCard}>
        <h3 className={highlightedInfoStyles.infoCard__title}>Producto con mayor<br/>Valor</h3>

        <div className={highlightedInfoStyles.infoCard__body}>
          <span className={highlightedInfoStyles.infoCard__quantity}>{expensiveProduct.name}</span>
        </div>
      </div>

      {showCatFacts && (
        <Modal closeModal={() => setShowCatFacts(false)} size="small">
          <>
            <h3 className={highlightedInfoStyles.infoCard__title}>Sabías que...</h3>

            <div className={highlightedInfoStyles.infoCatFacts}>
              {catFacts?.map((catFact, index) => (
                <div className={highlightedInfoStyles.infoCard__body} key={index}>
                  <span className={highlightedInfoStyles.infoCard__catFact}>{catFact}</span>
                </div>
              ))}
            </div>
          </>
        </Modal>
      )}
    </div>
  )
}