import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// my importations
import RouterIndex from './pages/router'
import { ROOT_REDUCER_TYPE } from './redux/store'
import { _getTheme } from './redux/other/other.action'

const App = () => {

  const { darkMode } = useSelector((state: ROOT_REDUCER_TYPE) => state.other)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(_getTheme())
  }, [])

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

  }, [darkMode])

  return <RouterIndex />
}

export default App