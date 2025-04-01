import { FC } from 'react'
import { useDispatch } from 'react-redux'
// icons
import { FaPlus } from 'react-icons/fa6'
// my importations
import { _openModal, _selectRealisation } from '../../redux/other/other.action'
import { REALISATION_TYPE } from '../../redux/other/other.type'

type COMPONENT_TYPE = {
    index: number
    realisation: REALISATION_TYPE
}

const PortfolioInfoCard: FC<COMPONENT_TYPE> = (props) => {
    const { realisation } = props
    const { description, images, title, type } = realisation

    const dispatch = useDispatch<any>()

    const handleSelectRealisation = () => {
        dispatch(_openModal(true))
        dispatch(_selectRealisation(realisation))
    }

    return (
        <div className='portfolio_info_container'>
            {/* <div data-aos='zoom-in' data-aos-duration={index * 1000} className='portfolio_info_container'> */}
            <div className='portfolio_img_container'>
                <img src={images[0]} alt='Photo de couverture du portfolio' className='portfolio_img' />
            </div>

            <div className='type_title_desc_see_container'>
                <div className='type_title_desc_container'>
                    <span className='type'>{type}</span>
                    <h3 className='title'>{title}</h3>
                    {description && <p className='description'>{ }</p>}
                </div>

                <div className='see_icon_container' title='Voir plus de details' onClick={handleSelectRealisation} >
                    <FaPlus className='see_icon' />
                </div>
            </div>
        </div>
    )
}

export default PortfolioInfoCard