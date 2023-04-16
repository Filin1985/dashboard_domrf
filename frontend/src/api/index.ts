export const API_URL: string = `http://localhost:8000/api`
import { IFlatData } from '../services/slices/flatSlice'
import { IRegionData } from '../services/slices/regionsSlice'

const HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
}
type HeadersInit = Headers | string[][] | { [key: string]: string }

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}

export const apiRequest = <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res))
}

export const getFlatDataApi = () => {
  return apiRequest<IFlatData[]>(`${API_URL}/flats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  })
}

export const getRegionsDataApi = () => {
  return apiRequest<IRegionData[]>(`${API_URL}/regions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  })
}
