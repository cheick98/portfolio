// icons
import { IconType } from 'react-icons'
// icons
import { AiOutlineHome } from 'react-icons/ai'
import { RiFileList2Line } from 'react-icons/ri'
import { PiNetworkDuotone } from 'react-icons/pi'
import { MdOutlineContacts } from 'react-icons/md'

type COMPONENT_TYPE = Array<{
    menuName: string, menuUrl: string, menuIcon: IconType,
}>

export const menus: COMPONENT_TYPE = [
    { menuName: 'Accueil', menuUrl: '/', menuIcon: AiOutlineHome },
    { menuName: 'Resumé', menuUrl: '/resume', menuIcon: RiFileList2Line },
    { menuName: 'Portfolio', menuUrl: '/portfolio', menuIcon: PiNetworkDuotone },
    { menuName: 'Contact', menuUrl: '/contact', menuIcon: MdOutlineContacts },
]

