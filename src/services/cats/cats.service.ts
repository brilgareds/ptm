import { api, generalConfig } from "../config"

export const catService = {
  getFacts: async () => {
    const url = `${process.env.REACT_APP_CAT_URL}?lang=esp`

    return api(url, {...generalConfig})
  }
}