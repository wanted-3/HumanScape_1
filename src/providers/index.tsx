import { ReactNode } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import ReduxProvider from './ReduxProvider'

type Props = {
  children?: ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  )
}
export default AppProvider
