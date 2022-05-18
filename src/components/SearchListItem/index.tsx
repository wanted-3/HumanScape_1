import { SearchIcon } from '../../assets/svgs'
import { cx } from '../../styles'
import styles from './searchListItem.module.scss'

type Props = {
  title: string
}

const SearchListItem = ({ title }: Props) => {
  return (
    <li className={cx(styles.listItem)}>
      <SearchIcon />
      <p>{title}</p>
    </li>
  )
}

export default SearchListItem
