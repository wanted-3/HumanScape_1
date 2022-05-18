import a, { AxiosResponse } from 'axios'

// const baseURL = 'https://apis.data.go.kr'

const axios = a.create({ baseURL: '' })
interface OriginApiResult {
  response: {
    header: {
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: { sickCd: string; sickNm: string }[]
      }
      numOfRows: number
      pageNo: number
      totalCount: number
    }
  }
}

axios.interceptors.request.use((req) => {
  console.log(`"${req.params.searchText}" 호출됨`)
  return req
})
axios.interceptors.response.use((res: AxiosResponse<OriginApiResult>) => {
  const { data } = res

  let items
  if (Array.isArray(data.response.body.items.item)) {
    items = data.response.body.items.item
  } else if (typeof data.response.body.items.item === 'object') {
    items = [data.response.body.items.item]
  } else if (typeof data.response.body.items === 'string') {
    items = []
  }
  return {
    ...res,
    data: {
      items,
    },
  }
})

export default axios
