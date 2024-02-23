import { api } from "../config"

interface GetFactsResponse {
  id: string
  language: string
  permalink: string
  source: string
  source_url: string
  text: string
}

export const uselessfactsService = {
  getFacts: async () => {
    const url = `${process.env.REACT_APP_USELESSFACTS}/api/v2/facts/today`

    return api.get<GetFactsResponse>(url)
  }
}