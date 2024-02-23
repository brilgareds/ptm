import { ReactElement } from "react"
import ButtonStyles from './button.module.css'

interface ButtonProps {
  children?: ReactElement | string | boolean
  color?: string
  icon?: ReactElement
  iconAlign?: 'left' | 'right'
  onClick?: () => void | Promise<void>
  style?: { [key: string]: string }
  className?: string
}

export default function Button(props: ButtonProps) {
  const { color='--primary-100', icon, iconAlign='left', children, onClick, className='' } = props
  const buttonInlineStyles = { "--color": `var(${color})` } as React.CSSProperties

  const Icon = () => (
    <div className={ButtonStyles.button__iconContainer}>{icon}</div>
  )

  return (
    <>
      <button className={`${ButtonStyles.button} ${className}`} style={buttonInlineStyles} onClick={onClick}> 
        {icon !== undefined && iconAlign === 'left' && <Icon />}

        {children !== undefined && (
          <span className={ButtonStyles.button__textContainer}>{children}</span>
        )}

        {icon !== undefined && iconAlign === 'right' && <Icon />}
      </button>
    </>
  )
}