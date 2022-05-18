import { cx } from '../../styles'
import SearchListItem from '../SearchListItem'
import styles from './searchList.module.scss'

const SearchList = () => {
  return (
    <ul className={cx(styles.list)}>
      <p className={cx(styles.title)}>추천 검색어</p>
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
      {/* {children} */}
    </ul>
  )
}
export default SearchList
