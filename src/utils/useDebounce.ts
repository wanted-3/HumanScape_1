import { useEffect } from 'react'

function useDebounce(callback: Function, time = 200) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback()
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [callback, time])
}
export default useDebounce
