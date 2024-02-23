import { api } from "../config"

interface GetFactsResponse {
  data: string[]
}

export const catService = {
  getFacts: async () => {
    const url = `${process.env.REACT_APP_CAT_URL}?lang=esp`

    return api.get<GetFactsResponse>(url)
  }
}