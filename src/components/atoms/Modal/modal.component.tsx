import { MouseEvent, ReactElement } from 'react'
import ModalStyles from './modal.module.css'

interface ModalComponentProps {
  children: ReactElement
  closeModal: () => void
  size?: 'small' | 'normal'
}

export default function ModalComponent (props: ModalComponentProps) {
  const { children, closeModal, size='normal' } = props
  const modalContainerClass = 'modalContainer'
  const containerClass = `${ModalStyles[modalContainerClass]}`
  const sizeClass = `${ModalStyles[`${modalContainerClass}-${size}`]}`

  const shadowHandleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal()
  }

  return (
    <div className={ModalStyles.shadow} onClick={shadowHandleClick}>
      <div className={`${containerClass} ${sizeClass}`}>
        <div className={ModalStyles.modal}>
          <span className={ModalStyles.exit} onClick={closeModal}>x</span>
          {children}
        </div>
      </div>
    </div>
  )
} 