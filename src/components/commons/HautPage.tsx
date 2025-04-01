import { FC } from 'react'

type COMPONENT_TYPE = { name: string }

const HautPage: FC<COMPONENT_TYPE> = ({ name }) => {

    return (
        <div className='haut_page_container'>
            <h1 className='name'>{name}</h1>
            <div className='row'></div>
        </div>
    )
}

export default HautPage