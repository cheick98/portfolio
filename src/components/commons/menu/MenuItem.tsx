import { FC } from 'react'
import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

type COMPONENT_TYPE = {
    menu: {
        menuName: string
        menuUrl: string
        menuIcon: IconType
    }
}

const MenuItem: FC<COMPONENT_TYPE> = (props) => {
    const { menu } = props
    const { menuIcon: MenuIcon, menuName, menuUrl } = menu

    return (
        <li className='menu_container'>
            <NavLink to={menuUrl} className='menu_icon_name_container'>
                <MenuIcon className='menu_icon' />
                <span className='menu_name'>{menuName}</span>
            </NavLink>
        </li>
    )
}

export default MenuItem