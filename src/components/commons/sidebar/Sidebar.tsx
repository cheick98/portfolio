import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
// icons
import { FiPhone } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineFileDownload, MdOutlineMail } from 'react-icons/md'

const Sidebar = () => {

    return (
        <div className='sidebar_container'>
            <div className='photo_container'>
                <img src='/portfolio/images/profil.jpg' alt='Photo de profil' className='photo' />
            </div>

            <div className='name_role_container'>
                <h3 className='name'>Cheick Oumar Diabaté</h3>
                <span className='role'>
                    <Typewriter
                        words={['Développeur web', 'Développeur mobile', `Installateur et configurateur d'OS`]}
                        cursor={true}
                        loop
                        cursorColor='#FE9319'
                    />
                </span>
            </div>

            <div className='social_network_container'>
                <Link to={'https://www.facebook.com/cheickoumar.diabate.18/'} target='_blank' rel='noreferrer' className='icon_container'>
                    <img src='/portfolio/icons/facebook.png' alt='Icon facebook' className='icon' />
                </Link>

                <Link to={'https://www.linkedin.com/in/cheick-oumar-diabate-8b6819237/'} target='_blank' rel='noreferrer' className='icon_container'>
                    <img src='/portfolio/icons/linkedin.png' alt='Icon linkedin' className='icon' />
                </Link>

                <Link to={'https://x.com/Cheickoumar300'} target='_blank' rel='noreferrer' className='icon_container'>
                    <img src='/portfolio/icons/twitter.png' alt='Icon twitter' className='icon' />
                </Link>

                <Link to={'https://github.com/cheick98'} target='_blank' rel='noreferrer' className='icon_container'>
                    <img src='/portfolio/icons/github.png' alt='Icon github' className='icon' />
                </Link>
            </div>

            <div className='sidebar_contact_container'>

                <div className='icon_info_container'>
                    <div className='icon_name_container'>
                        <FiPhone className='icon' />
                        <h4 className='icon_name'>Téléphone</h4>
                    </div>

                    <a href='tel:+22373030732' className='info'>+223 73 03 07 32</a> <br />
                    <a href='tel:+22367623593' className='info'>+223 67 62 35 93</a>
                </div>

                <hr className='divider' />

                <div className='icon_info_container'>
                    <div className='icon_name_container'>
                        <MdOutlineMail className='icon' />
                        <h4 className='icon_name'>Email</h4>
                    </div>

                    <a href='mailto:cheickoumardiabate300@gmail.com' className='info'>cheickoumardiabate300@gmail.com</a>
                </div>

                <hr className='divider' />

                <div className='icon_info_container'>
                    <div className='icon_name_container'>
                        <SlLocationPin className='icon' />
                        <h4 className='icon_name'>Adresse</h4>
                    </div>

                    <span className='info'>Kabala, 25029 Bamako, Mali</span>
                </div>

                <hr className='divider' />

                <div className='cv_global_container'>
                    <Link to='/docs/pdf/cv.pdf' target='_blank' rel='noreferrer' className='cv_container'>
                        <MdOutlineFileDownload className='cv_icon' />
                        <span className='cv_name'>Télécharger CV</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar