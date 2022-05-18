import { SearchIcon } from '../../assets/svgs'
import { cx } from '../../styles'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  function handleChange() {}

  return (
    <form>
      <div className={cx(styles.input)}>
        <SearchIcon />
        <input type='text' placeholder='질환명을 입력해 주세요.' onChange={handleChange} />
      </div>
      <button type='submit'>검색</button>
    </form>
  )
}
export default SearchBar
