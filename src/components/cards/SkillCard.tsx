import { FC } from 'react'

type COMPONENT_TYPE = {
    skill: { name: string }
}

const SkillCard: FC<COMPONENT_TYPE> = (props) => {
    const { skill } = props
    const { name } = skill

    return <span className='competence_name'>{name}</span>
}

export default SkillCard