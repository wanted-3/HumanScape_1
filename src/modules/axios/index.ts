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

axios.interceptors.response.use((res: AxiosResponse<OriginApiResult>) => {
  try {
    return {
      ...res,
      data: {
        items: res.data.response.body.items.item,
      },
    }
  } catch {
    return res
  }
})

export default axios
