import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import queryClient from '../modules/reactQuery/queryClient'

type Props = {
  children?: ReactNode
}

const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}
export default ReactQueryProvider
