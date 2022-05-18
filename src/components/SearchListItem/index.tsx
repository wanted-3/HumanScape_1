import { SearchIcon } from '../../assets/svgs'
import { cx } from '../../styles'
import styles from './searchListItem.module.scss'

const SearchListItem = () => {
  return (
    <li className={cx(styles.listItem)}>
      <SearchIcon />
      <p>hi</p>
    </li>
  )
}

export default SearchListItem
