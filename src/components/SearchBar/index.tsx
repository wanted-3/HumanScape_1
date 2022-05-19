import { ChangeEvent, FormEventHandler, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getDiseaseName } from '../../api/getDiseaseName'
import { SearchIcon } from '../../assets/svgs'
import QUERY_KEYS from '../../modules/reactQuery/queryKeys'
import { setInputString, setSearchString } from '../../modules/redux/slice'
import { RootState } from '../../modules/redux/store'
import { cx } from '../../styles'
import useDebounce from '../../utils/useDebounce'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchString = useSelector((state: RootState) => state.searchReducer.searchString)
  const inputString = useSelector((state: RootState) => state.searchReducer.inputString)

  const debounceCallback = useCallback(() => {
    dispatch(setSearchString(inputString.trim()))
  }, [dispatch, inputString])

  useDebounce(debounceCallback)

  useQuery([QUERY_KEYS.SEARCH, { s: searchString }], getDiseaseName, {
    retry: 0,
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e
    dispatch(setInputString(value))
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-alert
    alert('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={cx(styles.input)}>
        <SearchIcon />
        <input type='text' placeholder='질환명을 입력해 주세요.' onChange={handleInputChange} value={inputString} />
      </div>
      <button type='submit'>검색</button>
    </form>
  )
}
export default SearchBar
