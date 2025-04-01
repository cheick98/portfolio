import { FC } from 'react'
import { IconType } from 'react-icons'

type COMPONENT_TYPE = {
    index: number
    skill: { icon: IconType, name: string, description: string }
}

const WorkSkillCard: FC<COMPONENT_TYPE> = (props) => {
    const { skill } = props
    const { description, icon: Icon, name } = skill

    return (
        // <div data-aos='zoom-in' data-aos-duration={(index + 1) * 500} className='skill_container'>
        <div className='skill_container'>
            <div className='skill_icon_name_container'>
                <Icon className='skill_icon' />
                <h3 className='skill_name'>{name}</h3>
            </div>
            <p className='skill_description'>{description}</p>
        </div>
    )
}

export default WorkSkillCard