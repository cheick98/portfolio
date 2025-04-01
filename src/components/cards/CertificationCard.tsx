import { FC } from 'react'
import { Link } from 'react-router-dom'
// icons
import { RxExternalLink } from 'react-icons/rx'

type COMPONENT_TYPE = {
    index: number
    certification: { name: string, link: string }
}

const CertificationCard: FC<COMPONENT_TYPE> = (props) => {
    const { certification } = props
    const { link, name } = certification

    return (
        // <Link data-aos='zoom-in' data-aos-duration={(index + 1) * 300} to={link} target='_blank' rel='noreferrer' className='name_icon_container'>
        <Link to={link} target='_blank' rel='noreferrer' className='name_icon_container'>
            <span className='name'>{name}</span>
            <RxExternalLink className='icon' />
        </Link>
    )
}

export default CertificationCard