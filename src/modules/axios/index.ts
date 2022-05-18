import a, { AxiosResponse } from 'axios'

// TODO:원래대로 바꾸기
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
  const { searchText } = req.params
  console.log(`${searchText} 데이터 호출`)

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
    throw new Error('검색어 없음')
  }
  return {
    ...res,
    data: {
      items,
    },
  }
})

export default axios
