import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getDiseaseName } from '../../api/getDiseaseName'
import QUERY_KEYS from '../../modules/reactQuery/queryKeys'
import { RootState } from '../../modules/redux/store'
import { cx } from '../../styles'
import SearchListItem from '../SearchListItem'
import Spinner from '../Spinner'
import styles from './searchList.module.scss'

const SearchList = () => {
  const inputSearch = useSelector((state: RootState) => state.searchReducer.searchString)

  const { data, isLoading, error, isError } = useQuery([QUERY_KEYS.SEARCH, { s: inputSearch }], getDiseaseName, {
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: 0,
  })

  if (isError) {
    const e = error as Error
    return (
      <div className={cx(styles.list)}>
        <p>{e.message}</p>
      </div>
    )
  }

  if (data?.data.items.length === 0) {
    return (
      <div className={cx(styles.list)}>
        <p>검색어 없음</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={cx(styles.list)}>
        <Spinner />
      </div>
    )
  }

  return (
    <ul className={cx(styles.list)}>
      <p className={cx(styles.title)}>추천 검색어</p>
      {data?.data.items.map((item) => (
        <SearchListItem key={item.sickCd} title={item.sickNm} />
      ))}
    </ul>
  )
}
export default SearchList
