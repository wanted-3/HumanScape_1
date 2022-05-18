import { ChangeEvent } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getDiseaseName } from '../../api/getDiseaseName'
import { SearchIcon } from '../../assets/svgs'
import QUERY_KEYS from '../../modules/reactQuery/queryKeys'
import { setSearchInput } from '../../modules/redux/slice'
import { RootState } from '../../modules/redux/store'
import { cx } from '../../styles'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const dispatch = useDispatch()
  const inputSearch = useSelector((state: RootState) => state.searchReducer.search)

  useQuery([QUERY_KEYS.SEARCH, { s: inputSearch }], getDiseaseName, {
    retry: 0,
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e
    dispatch(setSearchInput(value))
  }

  return (
    <form>
      <div className={cx(styles.input)}>
        <SearchIcon />

        <input type='text' placeholder='질환명을 입력해 주세요.' onChange={handleChange} value={inputSearch} />
      </div>
      <button type='submit'>검색</button>
    </form>
  )
}
export default SearchBar
