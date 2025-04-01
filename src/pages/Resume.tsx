// icons
import { GiSkills } from 'react-icons/gi'
import { GrCertificate } from 'react-icons/gr'
import { MdOutlineSchool } from 'react-icons/md'
import { IoBagAddOutline } from 'react-icons/io5'
import { FaPersonDressBurst } from 'react-icons/fa6'
// my importations
import { pageResume } from '../utils/pageNames'
import HautPage from '../components/commons/HautPage'
import SkillCard from '../components/cards/SkillCard'
import CertificationCard from '../components/cards/CertificationCard'
import PageContainer from '../components/commons/container/PageContainer'
import EducationExperienceCard from '../components/cards/EducationExperienceCard'
import { certifications, competences, comportements, educations, experiences } from '../utils/constants'

const Resume = () => {
    return (
        <PageContainer titlePage={pageResume}>
            <HautPage name='Resumé' />

            <div className='resume_container'>
                {/* education */}
                <div className='resume_content_container'>
                    <div className='icon_name_container'>
                        <MdOutlineSchool className='icon' />
                        <h2 className='name'>Education</h2>
                    </div>

                    <div className='education_experience_content_container'>
                        {educations.map((education, i) => <EducationExperienceCard key={i} index={i} value={education} />)}
                    </div>
                </div>

                {/* experience */}
                <div className='resume_content_container'>
                    <div className='icon_name_container'>
                        <IoBagAddOutline className='icon' />
                        <h2 className='name'>Expérience</h2>
                    </div>

                    <div className='education_experience_content_container'>
                        {experiences.map((experience, i) => <EducationExperienceCard key={i} index={i} value={experience} />)}
                    </div>
                </div>

                {/* certification */}
                <div className='resume_content_container certification'>
                    <div className='icon_name_container'>
                        <GrCertificate className='icon' />
                        <h2 className='name'>Certification</h2>
                    </div>

                    <div className='certification_container'>
                        {certifications.map((certification, i) => <CertificationCard key={i} index={i} certification={certification} />)}
                    </div>
                </div>

                {/* competence */}
                <div className='resume_content_container'>
                    <div className='icon_name_container'>
                        <GiSkills className='icon' />
                        <h2 className='name'>Compétence</h2>
                    </div>

                    {/* <div data-aos='zoom-in' data-aos-duration='1000' className='resume_skill_container'> */}
                    <div className='resume_skill_container'>
                        {competences.map((competence, i) => <SkillCard key={i} skill={competence} />)}
                    </div>
                </div>

                {/* comportement */}
                <div className='resume_content_container soft_skill'>
                    <div className='icon_name_container'>
                        <FaPersonDressBurst className='icon' />
                        <h2 className='name'>Comportement</h2>
                    </div>

                    {/* <div data-aos='zoom-in' data-aos-duration='1500' className='resume_skill_container'> */}
                    <div className='resume_skill_container'>
                        {comportements.map((comportement, i) => <SkillCard key={i} skill={comportement} />)}
                    </div>
                </div>
            </div>
        </PageContainer >
    )
}

export default Resume