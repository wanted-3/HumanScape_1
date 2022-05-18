/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { KeyboardEventHandler, ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { SearchIcon } from '../../assets/svgs'
import { setInputString } from '../../modules/redux/slice'
import { cx } from '../../styles'
import styles from './searchListItem.module.scss'

type Props = {
  title: string
}

const SearchListItem = ({ title }: Props) => {
  const dispatch = useDispatch()
  const handleLiClick: ReactEventHandler = () => {
    dispatch(setInputString(title))
  }

  const handleLiSelect: KeyboardEventHandler = (e) => {
    console.log(e.key)

    if (e.key === 'Enter') {
      dispatch(setInputString(title))
    }
  }

  return (
    // FIXME:
    <li tabIndex={0} className={cx(styles.listItem)} onClick={handleLiClick} onKeyDown={handleLiSelect}>
      <SearchIcon />
      <p>{title}</p>
    </li>
  )
}

export default SearchListItem
