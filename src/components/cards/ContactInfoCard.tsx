import { FC } from 'react'
import { IconType } from 'react-icons'

type COMPONENT_TYPE = {
    info: { icon: IconType, name: string, description1: string, description2?: string }
}

const ContactInfoCard: FC<COMPONENT_TYPE> = (props) => {
    const { info } = props
    const { description1, icon: Icon, name, description2 } = info

    return (
        <div className='contact_info_container'>
            <div className='contact_icon_name_container'>
                <Icon className='contact_icon' />
                <h4 className='contact_name'>{name}</h4>
            </div>

            <a href={`${description1.includes('@') ? 'mailto' : 'tel'}:${description1}`} className='contact_info'>{description1}</a> <br />
            {description2 && <a href={`${description2.includes('@') ? 'mailto' : 'tel'}:${description2}`} className='contact_info'>{description2}</a>}
        </div>
    )
}

export default ContactInfoCard