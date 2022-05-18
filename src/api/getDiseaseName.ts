import { AxiosResponse } from 'axios'
import { QueryFunction } from 'react-query'
import axios from '../modules/axios'
import QUERY_KEYS from '../modules/reactQuery/queryKeys'
import { Item } from '../types/search'

const DISEASE_BASE_URL = '/B551182/diseaseInfoService/getDissNameCodeList?sickType=1&medTp=2&diseaseType=SICK_NM'

type QueryKey = [typeof QUERY_KEYS['SEARCH'], { s: string }]

const getDiseaseName: QueryFunction<AxiosResponse<Item[]>, QueryKey> = (context) => {
  const { queryKey } = context
  const [, { s }] = queryKey

  return axios({
    method: 'GET',
    url: `${DISEASE_BASE_URL}`,
    params: {
      searchText: s,
      ServiceKey: process.env.REACT_APP_SECRET_KEY,
      _type: 'json',
    },
  })
}
export { getDiseaseName }
