import { Triangle } from "react-loader-spinner";
import loadingStyles from './loading.module.css'

interface LoadingInterface {
  variant?: 'fullscreen' | 'absolute'
}

const loadingClassContainer = 'loadingContainer'

export default function Loading(props?: LoadingInterface) {
  let className = loadingStyles[loadingClassContainer]

  const commonProps = {
    visible: true,
    height: 120,
    width: 120,
    color: "#4fa94d",
    ariaLabel:"triang le-loading",
    wrapperStyle: {},
    wrapperClass: ""
  }

  if (props?.variant) className += ` ${loadingStyles[props?.variant]}`

  return (
    <div className={className}>
      <Triangle {...commonProps} />
    </div>
  )
}