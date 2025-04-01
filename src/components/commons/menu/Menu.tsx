// my importations
import MenuItem from './MenuItem'
import { menus } from '../../../utils/menus'

const Menu = () => {
    return (
        <div className='menu_global_container'>
            <ul className='menu_list_container'>
                {menus.map((menu, i) => <MenuItem key={i} menu={menu} />)}
            </ul>
        </div>
    )
}

export default Menu