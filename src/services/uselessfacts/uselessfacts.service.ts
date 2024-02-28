import { api, generalConfig } from "../config"

export const uselessfactsService = {
  getFacts: async () => {
    const url = `${process.env.REACT_APP_USELESSFACTS}/api/v2/facts/today`

    return api(url, {...generalConfig})
  }
}