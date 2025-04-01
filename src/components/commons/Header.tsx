import { useDispatch, useSelector } from 'react-redux'
// icons
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai'
// my importations
import { ROOT_REDUCER_TYPE } from '../../redux/store'
import { _changeTheme } from '../../redux/other/other.action'

const Header = () => {
    const { darkMode } = useSelector((state: ROOT_REDUCER_TYPE) => state.other)
    const dispatch = useDispatch<any>()

    const handleChangeTheme = () => dispatch(_changeTheme(!darkMode))

    return (
        <header className={darkMode ? 'dark' : ''}>
            {/* <h1 className='sitename'>{siteName}</h1> */}

            <span className='theme_icon_container' onClick={handleChangeTheme}>
                {darkMode ? <AiOutlineSun className='theme_icon' /> : <AiOutlineMoon className='theme_icon' />}
            </span>
        </header>
    )
}

export default Header