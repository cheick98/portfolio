import { FC } from 'react'
import { useSelector } from 'react-redux'
// my importations
import Menu from '../menu/Menu'
import Sidebar from '../sidebar/Sidebar'
import { ROOT_REDUCER_TYPE } from '../../../redux/store'

type COMPONENT_TYPE = { children: React.ReactNode }

const Layout: FC<COMPONENT_TYPE> = (props) => {
    const { children } = props

    const { darkMode } = useSelector((state: ROOT_REDUCER_TYPE) => state.other)

    return (
        <div data-aos='zoom-in' className={`layout_global_container ${darkMode ? 'dark' : ''}`}>
            <div className='layout_container'>
                {/* <Header /> */}

                <div className='layout_content_container'>
                    <Sidebar />

                    <div className='right_part_container'>
                        <Menu />

                        <div className='right_part'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout