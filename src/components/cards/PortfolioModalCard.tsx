import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { useDispatch, useSelector } from 'react-redux'
// icons
import { FaReact } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
// my importations
import { ROOT_REDUCER_TYPE } from '../../redux/store'
import { _openModal, _selectRealisation } from '../../redux/other/other.action'

const PortfolioModalCard = () => {

    const { realisation } = useSelector((state: ROOT_REDUCER_TYPE) => state.other)
    const dispatch = useDispatch<any>()

    const [open, setOpen] = useState(false)

    const handleCloseModal = () => {
        dispatch(_openModal(false))
        dispatch(_selectRealisation(null))
    }

    return (
        realisation ?
            <div className='portfolio_modal_card_container'>
                <div className='overlay' onClick={handleCloseModal}></div>

                <div data-aos='zoom-in' className='modal_content_container'>
                    <div className='modal_tite_close_container'>
                        <span className='title'>Information sur la realisation</span>
                        <AiOutlineClose className='close_icon' onClick={handleCloseModal} />
                    </div>

                    <div className='modal_body_container'>
                        <div className='portfolio_img_container'>
                            <img src={realisation.images[0]} alt='Photo de couverture du portfolio' className='portfolio_img' />
                        </div>

                        <div className='info_tech_container'>
                            <div className='info_see_icon_container'>
                                <div className='info_container'>
                                    <span className='type'>{realisation.type}</span>
                                    <h3 className='title'>{realisation.title}</h3>
                                </div>

                                <div className='see_icon_container' title='Voir toutes les images' onClick={() => setOpen(true)}>
                                    <MdOutlineRemoveRedEye className='see_icon' />
                                </div>
                            </div>

                            <p className='description'>{realisation.description}</p>

                            <div className='technologie_container'>
                                <div className='icon_title_container'>
                                    <FaReact className='icon' />
                                    <h3 className='title'>Technologies utilisées</h3>
                                </div>

                                <div className='technologie_content_container'>
                                    {realisation.technologies.map((techno, i) => <span className='technologie' key={i}>{techno}</span>)}
                                </div>
                            </div>
                        </div>

                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={
                                realisation.images.map((src) => ({ src }))
                            }
                        />
                    </div>
                </div>
            </div> :
            <></>
    )
}

export default PortfolioModalCard