import { SnackbarOrigin, SnackbarProvider } from "notistack"
import { ReactElement } from "react"

interface CustomProvidersProps {
  children: ReactElement
}

export default function CustomProviders(props: CustomProvidersProps) {
  const { children } = props

  const anchorOrigin: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  }

  return (
    <SnackbarProvider anchorOrigin={anchorOrigin}>
      {children}
    </SnackbarProvider>
  )
}