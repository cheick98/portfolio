import { FC } from 'react'
// icons
import { RxExternalLink } from 'react-icons/rx'
import { Link } from 'react-router-dom'

type COMPONENT_TYPE = {
    index: number
    value: { year: string, name: string, role: string, link?: string }
}

const EducationExperienceCard: FC<COMPONENT_TYPE> = (props) => {
    const { value } = props
    const { name, role, year, link } = value

    return (
        // <div data-aos='zoom-in' data-aos-duration={(index + 1) * 500} className='education_experience_content'>
        <div className='education_experience_content'>
            <span className='year'>{year}</span>
            <h3 className='name_link_container'>
                {name}
                {link &&
                    <Link to={link} target='_blank' rel='noreferrer' className='link_container'>
                        <RxExternalLink className='link' />
                    </Link>
                }
            </h3>
            <h4 className='role'>{role}</h4>
        </div>
    )
}

export default EducationExperienceCard