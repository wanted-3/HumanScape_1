import { QueryClient, setLogger } from 'react-query'

const queryClient = new QueryClient()
setLogger({
  log: console.log,
  error: () => {},
  warn: console.warn,
})

export default queryClient
