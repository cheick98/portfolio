// my importations
import { pageHome } from '../utils/pageNames'
import { workSkills } from '../utils/constants'
import HautPage from '../components/commons/HautPage'
import WorkSkillCard from '../components/cards/WorkSkillCard'
import PageContainer from '../components/commons/container/PageContainer'

const Home = () => {
    return (
        <PageContainer titlePage={pageHome}>
            <HautPage name='Savoir plus sur moi' />

            <div className='home_container'>
                {/* <p data-aos='zoom-in' data-aos-duration={1000} className='presentation'> */}
                <p className='presentation'>
                    Développeur Full-Stack passionné, curieux et adaptable, avec plus de <span className='important'>3 ans</span> d'expérience en développement web et mobile.
                    Maîtrisant aussi bien le front-end que le back-end, j’aime concevoir des applications performantes, évolutives et centrées sur l’utilisateur.
                    Mon expertise en React, Node.js, NestJS et bases de données (MySQL, MongoDB, Firebase) me permet de créer des solutions innovantes et optimisées.
                    Toujours en veille technologique, je suis motivé par les défis et l’apprentissage continu pour proposer des expériences numériques de qualité.
                </p>

                <div className='work_skill_container'>
                    <h2 className='title'>Ce que je fais</h2>

                    <div className='skill_global_container'>
                        {workSkills.map((skill, i) => <WorkSkillCard key={i} index={i} skill={skill} />)}
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Home