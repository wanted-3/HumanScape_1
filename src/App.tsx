import styles from './app.module.scss'
import SearchBar from './components/SearchBar'
import SearchList from './components/SearchList'
import { cx } from './styles'

const App = () => {
  return (
    <main className={cx(styles.app)}>
      <h1 className={cx(styles.heading)}>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <SearchBar />
      <SearchList />
    </main>
  )
}
export default App
