// my importations
import { pageContact } from '../utils/pageNames'
import { contactInfos } from '../utils/constants'
import HautPage from '../components/commons/HautPage'
import ContactInfoCard from '../components/cards/ContactInfoCard'
import PageContainer from '../components/commons/container/PageContainer'
// icons
import { VscSend } from 'react-icons/vsc'

const Contact = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <PageContainer titlePage={pageContact}>
            <HautPage name='Me contacter' />

            <div className='contact_container'>
                {/* <div data-aos='zoom-in' data-aos-duration={500} className='contact_info_global_container'> */}
                <div className='contact_info_global_container'>
                    {contactInfos.map((info, i) => <ContactInfoCard key={i} info={info} />)}
                </div>

                {/* <p data-aos='zoom-in' data-aos-duration={1000} className='contact_text'> */}
                <p className='contact_text'>
                    Je suis toujours ouvert à discuter de <span className='important'>nouveaux projets, d'opportunités dans le monde de la technologie, de partenariats</span> et plus encore ...
                </p>

                {/* <form data-aos='zoom-in' data-aos-duration={1000} className='contact_form' onSubmit={handleSubmit}> */}
                <form className='contact_form' onSubmit={handleSubmit}>
                    <div className='label_input_error_container'>
                        <label htmlFor='name' className='_label'>Nom complet</label>
                        <input type='text' name='name' id='name' className='_input' />
                        <span className='_error'></span>
                    </div>

                    <div className='label_input_error_container'>
                        <label htmlFor='email' className='_label'>Email</label>
                        <input type='text' name='email' id='email' className='_input' />
                        <span className='_error'></span>
                    </div>

                    <div className='label_input_error_container'>
                        <label htmlFor='message' className='_label'>Message</label>
                        <input type='text' name='message' id='message' className='_input' />
                        <span className='_error'></span>
                    </div>

                    <button type='submit' className='submit_btn'>
                        <VscSend className='send_icon' />
                        <span className='send_name'>Envoyer</span>
                    </button>
                </form>
            </div>
        </PageContainer>
    )
}

export default Contact