/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { KeyboardEventHandler, ReactEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from '../../assets/svgs'
import { setInputString } from '../../modules/redux/slice'
import { RootState } from '../../modules/redux/store'
import { cx } from '../../styles'
import styles from './searchListItem.module.scss'

const highlightedText = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'))

    return parts.reduce((prev, cur) => {
      if (cur.toLowerCase() === query.toLowerCase()) {
        return `${prev}<b>${cur}</b>`
      }
      return prev + cur
    }, '')
  }
  return text
}

type Props = {
  title: string | any
}

const SearchListItem = ({ title }: Props) => {
  const dispatch = useDispatch()
  const inputString = useSelector((state: RootState) => state.searchReducer.inputString)
  const handleClick: ReactEventHandler = () => {
    dispatch(setInputString(title))
  }

  const handleSelect: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(setInputString(title))
    }
  }

  return (
    // FIXME:
    <li tabIndex={0} className={cx(styles.listItem)} onClick={handleClick} onKeyDown={handleSelect}>
      <SearchIcon />
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: highlightedText(title, inputString) }} />
    </li>
  )
}

export default SearchListItem
