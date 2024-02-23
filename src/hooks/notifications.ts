import { useSnackbar } from 'notistack'

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar()

  const onSuccess = (message: string) => {
    enqueueSnackbar(message, { variant: 'success' })
  }

  const onWarning = (message: string) => {
    enqueueSnackbar(message, { variant: 'warning' })
  }

  const onError = (message: string) => {
    enqueueSnackbar(message, { variant: 'error' })
  }

  return {
    onSuccess,
    onWarning,
    onError,
  }
}
